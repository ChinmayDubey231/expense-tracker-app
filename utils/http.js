import axios from "axios";
import { getFormattedDate } from "./date";

const BACKEND_URL = process.env.EXPO_PUBLIC_BACKEND_URL;

function toStorableExpense(expenseData) {
  const dateStr =
    expenseData.date instanceof Date
      ? getFormattedDate(expenseData.date)
      : typeof expenseData.date === "string"
        ? expenseData.date
        : getFormattedDate(new Date(expenseData.date));
  return {
    amount: expenseData.amount,
    date: dateStr,
    description: expenseData.description,
  };
}

function fromStoredExpense(key, data) {
  const dateStr = data.date;
  const [year, month, day] =
    typeof dateStr === "string" && dateStr.match(/^\d{4}-\d{2}-\d{2}$/)
      ? dateStr.split("-").map(Number)
      : [NaN, NaN, NaN];
  const date =
    !isNaN(year) && !isNaN(month) && !isNaN(day)
      ? new Date(year, month - 1, day)
      : new Date(dateStr);

  return {
    id: key,
    amount: data.amount,
    date,
    description: data.description,
  };
}

export async function storeExpense(expenseData) {
  const response = await axios.post(
    BACKEND_URL + "/expenses.json",
    toStorableExpense(expenseData),
  );
  const id = response.data.name;
  return id;
}

export async function fetchExpenses() {
  const response = await axios.get(BACKEND_URL + "/expenses.json");

  const expenses = [];
  const data = response.data;

  if (data) {
    for (const key in data) {
      expenses.push(fromStoredExpense(key, data[key]));
    }
  }
  return expenses;
}

export async function updateExpense(id, expenseData) {
  await axios.put(
    BACKEND_URL + `/expenses/${id}.json`,
    toStorableExpense(expenseData),
  );
}

export async function deleteExpense(id) {
  await axios.delete(BACKEND_URL + `/expenses/${id}.json`);
}
