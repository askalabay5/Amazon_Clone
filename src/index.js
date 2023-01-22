import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reducer, { initialState } from "./reducer";
import reportWebVitals from "./reportWebVitals";
import { StateProvider } from "./StateProvider";
import { BrowserRouter } from "react-router-dom";

// const root = ReactDOM.createRoot(document.getElementById("root"));

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<StateProvider initialState={initialState} reducer={reducer}>
				<App />
			</StateProvider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);
reportWebVitals();
