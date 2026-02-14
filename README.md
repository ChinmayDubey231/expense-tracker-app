# Expense Tracker App

A cross-platform mobile expense tracking application built with **React Native** and **Expo**. Track your spending, view recent expenses, and manage your finances with a clean, intuitive interface.

![React Native](https://img.shields.io/badge/React_Native-0.81-black?style=flat-square&logo=react)
![Expo](https://img.shields.io/badge/Expo-54-black?style=flat-square&logo=expo)
![License](https://img.shields.io/badge/license-MIT-blue?style=flat-square)

## ✨ Features

- **Add & Edit Expenses** — Log expenses with amount, date, and description
- **Recent View** — See expenses from the last 7 days at a glance
- **All Expenses** — Browse your complete expense history
- **Cloud Sync** — Data persisted to Firebase Realtime Database
- **Cross-Platform** — Runs on iOS, Android, and Web
- **Form Validation** — Input validation with clear error messages
- **Error Handling** — Retry support for failed network requests

## 📱 Screenshots

| Recent Expenses  | All Expenses |   Add/Edit Expense   |
| :--------------: | :----------: | :------------------: |
| Last 7 days view | Full history | Form with validation |

## 🛠️ Tech Stack

- **React Native** — Cross-platform mobile framework
- **Expo** — Development toolchain & build service
- **React Navigation** — Tab & stack navigation
- **Firebase Realtime Database** — Backend data persistence
- **Axios** — HTTP client for API requests

## 📋 Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later)
- [Expo Go](https://expo.dev/go) app on your phone (for testing)
- npm or yarn

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/ChinmayDubey231/expense-tracker-app.git
cd expense-tracker-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure Firebase (optional)

The app uses a demo Firebase database by default. To use your own:

1. Create a project at [Firebase Console](https://console.firebase.google.com/)
2. Enable **Realtime Database** and set up rules
3. Update the `BACKEND_URL` in `utils/http.js` with your database URL

### 4. Start the app

```bash
npm start
```

Then scan the QR code with **Expo Go** (Android) or the Camera app (iOS).

### Available Scripts

| Command           | Description                       |
| ----------------- | --------------------------------- |
| `npm start`       | Start Expo development server     |
| `npm run android` | Run on Android emulator/device    |
| `npm run ios`     | Run on iOS simulator (macOS only) |
| `npm run web`     | Run in web browser                |

## 📁 Project Structure

```
expense-tracker-app/
├── components/
│   ├── ExpensesOutput/    # List, summary, item components
│   ├── ManageExpense/     # Form & input components
│   └── UI/                # Reusable Button, IconButton, overlays
├── screens/
│   ├── RecentExpenses.js  # Last 7 days view
│   ├── AllExpenses.js     # All expenses view
│   └── ManageExpense.js   # Add/edit expense screen
├── store/
│   └── expenses-context.js  # React Context + useReducer state
├── utils/
│   ├── http.js            # Firebase API calls
│   └── date.js            # Date helpers
├── constants/
│   └── styles.js          # Theme colors
└── App.js                 # Navigation & root component
```

## 🏗️ Architecture

- **State Management** — React Context with `useReducer` for expense CRUD operations
- **Navigation** — Bottom tabs (Recent / All) + Stack (Manage Expense modal)
- **Data Flow** — Fetch on mount → Context → Local state for filtered views

## 📄 License

This project is licensed under the MIT License.

## 👤 Author

**Chinmay Dubey**  
[LinkedIn](https://www.linkedin.com/in/chinmay-dubey-87684430a/) · [GitHub](https://github.com/ChinmayDubey231)
