import React from "react";
import ReactDOM from "react-dom/client";
import "./global.css";

import { DashboardPage } from "./pages/Dashboard";
import { SignUpPage } from "./pages/Forms/SignUp";

// biome-ignore lint/style/noNonNullAssertion: <explanation>
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <SignUpPage />
  </React.StrictMode>
);
