import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Body from "../components/Body";
import Header from "../components/Header";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
//import Home from "../components/Home";
import ContactUs from "../components/ContactUs";
import Error from "../components/Error";
import About from "../components/About";
import { Outlet } from "react-router-dom";
import RestaurantMenu from "../components/RestaurantMenu";
import { Shimmer } from "../components/Shimmer";
// import Grocery from "../components/Grocery";

const Grocery = lazy(() => import("../components/Grocery"));
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
					<Suspense fallback={<Shimmer />}>
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
