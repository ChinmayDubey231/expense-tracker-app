import { useCallback, useContext, useEffect, useRef, useState } from "react";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";
import { getDateMinusDays, getStartOfDay } from "../utils/date";
import { fetchExpenses } from "../utils/http";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import ErrorOverlay from "../components/UI/ErrorOverlay";

function RecentExpenses() {
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState();
  const expensesCtx = useContext(ExpensesContext);
  const isInitialMount = useRef(true);

  const loadExpenses = useCallback(async () => {
    setIsFetching(true);
    setError(null);
    try {
      const expenses = await fetchExpenses();
      expensesCtx.setExpenses(expenses);
    } catch (err) {
      setError("Could not fetch expenses!");
    }
    setIsFetching(false);
  }, [expensesCtx]);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      loadExpenses();
    }
  }, [loadExpenses]);

  if (error && !isFetching) {
    return <ErrorOverlay message={error} onRetry={loadExpenses} />;
  }

  if (isFetching) {
    return <LoadingOverlay />;
  }

  const todayStart = getStartOfDay(new Date());
  const date7DaysAgo = getDateMinusDays(new Date(), 7);
  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    const expenseDate = expense.date instanceof Date ? expense.date : new Date(expense.date);
    if (isNaN(expenseDate.getTime())) return false;
    const expenseDayStart = getStartOfDay(expenseDate);
    return expenseDayStart >= date7DaysAgo && expenseDayStart <= todayStart;
  });

  return (
    <ExpensesOutput
      expenses={recentExpenses}
      expensesPeriod="Last 7 days."
      fallbackText="No Expenses Registered for the last 7 days."
    />
  );
}

export default RecentExpenses;
