import React from "react";
import ReactDOM from "react-dom/client";
import theme from "../tailwind.config.js";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
