import "./App.css";
import React, { useEffect } from "react";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Payment from "./Payment";
import Orders from "./Orders";

const promise = loadStripe(
	// "pk_test_51MKYwZBCDDeqj9Gvatl3BoEX3EsA3j1qNka8RDgNL8iIGm25Gzz4YG3UAGwcruWPGSGcmQiPBGZvFPRVbkVZ9Ltw00NfUcXD83"
	"pk_test_51MKYwZBCDDeqj9Gvatl3BoEX3EsA3j1qNka8RDgNL8iIGm25Gzz4YG3UAGwcruWPGSGcmQiPBGZvFPRVbkVZ9Ltw00NfUcXD83"
);

function App() {
	const [{ user }, dispatch] = useStateValue();

	useEffect(() => {
		auth.onAuthStateChanged((authUser) => {
			if (authUser) {
				//if the user logged in /was logged in
				dispatch({
					type: "SET_USER",
					user: authUser,
				});
			} else {
				dispatch({
					type: "SET_USER",
					user: null,
				});
			}
		});
	}, []);

	return (
		<Routes>
			<Route
				path="/"
				element={
					<>
						<Header />
						<Home />
					</>
				}
			/>
			<Route
				path="/orders"
				element={
					<>
						<Header />
						<Orders />
					</>
				}
			/>
			<Route
				path="/checkout"
				element={
					<>
						<Header />
						<Checkout />
					</>
				}
			/>

			<Route
				path="/payment"
				element={
					<Elements stripe={promise}>
						<Header />
						<Payment />
					</Elements>
				}
			/>
			<Route path="/login" element={<Login />} />
		</Routes>
	);
}

export default App;
