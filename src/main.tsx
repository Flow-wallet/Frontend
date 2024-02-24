import React from "react";
import ReactDOM from "react-dom/client";
import { DashboardPage } from "./pages/Dashboard";
import "./global.css";

// biome-ignore lint/style/noNonNullAssertion: <explanation>
ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<DashboardPage />
	</React.StrictMode>,
);
