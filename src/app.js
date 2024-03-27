import React, { lazy, Suspense, useState, useContext, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import userContext from "./Utils/userContext";
import Error from "./components/Error";
import ContactUs from "./components/ContactUs";
import RestaurantMenu from "./components/RestaurantMenu";
import { Shimmer } from "./components/Shimmer";
import { Provider } from "react-redux";
import "../index.css";
import AppStore from "./StoreRE/AppStore";
import Cart from "./StoreRE/Cart";

const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(() => import("./components/About"));
const Body = lazy(() => import("./components/Body"));

const AppLayout = () => {
	const [userName, setuserName] = useState();
	//authentication
	useEffect(() => {
		const data = {
			name: "Raviteja ",
		};
		setuserName(data.name);
	}, []);

	return (
		<Provider store={AppStore}>
			<userContext.Provider value={{ loggedInUser: userName, setuserName }}>
				<div className="app">
					<Header />
					<Outlet />
				</div>
			</userContext.Provider>
		</Provider>
	);
};
const AppRouter = createBrowserRouter([
	{
		path: "/",
		element: <AppLayout />,
		children: [
			{
				path: "/",
				element: (
					<Suspense>
						<Body />
					</Suspense>
				),
			},
			{
				path: "/about",
				element: (
					<Suspense>
						<About />
					</Suspense>
				),
				errorElement: <Error />,
			},

			{
				path: "/contact",
				element: <ContactUs />,
				errorElement: <Error />,
			},
			{
				path: "/cart",
				element: <Cart />,
				errorElement: <Error />,
			},

			{
				path: "/groceries",
				element: (
					<Suspense>
						<Grocery />
					</Suspense>
				),
				errorElement: <Error />,
			},
			{
				path: "/restaurant/:resId",
				element: <RestaurantMenu />,
				errorElement: <Error />,
			},
		],
		errorElement: <Error />,
	},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRouter} />);
