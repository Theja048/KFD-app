import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Body from "./components/Body";
import Header from "./components/Header";
import About from "./components/About";
import Error from "./components/Error";
import ContactUs from "./components/ContactUs";
import RestaurantMenu from "./components/RestaurantMenu";
import { Shimmer } from "./components/Shimmer";
// import Grocery from "./components/Grocery";
import "../index.css";
const Grocery = lazy(() => import("./components/Grocery"));
const AppLayout = () => {
	return (
		<div className="app">
			<Header />
			<Outlet />
		</div>
	);
};
const AppRouter = createBrowserRouter([
	{
		path: "/",
		element: <AppLayout />,
		children: [
			{
				path: "/",
				element: <Body />,
			},
			{
				path: "/about",
				element: <About />,
				errorElement: <Error />,
			},

			{
				path: "/contact",
				element: <ContactUs />,
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
