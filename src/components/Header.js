import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import { LOGO_URL } from "../Utils/constant";
import React from "react";
import userContext from "../Utils/userContext";
import { useSelector } from "react-redux";

const Header = () => {
	const [btnName, setbtnName] = useState("Login");
	const onlineStatus = useOnlineStatus();
	const { loggedInUser } = useContext(userContext);

	//selecter sub store using selector

	const cartItems = useSelector((store) => store.cart.items);
	console.log(cartItems);
	return (
		<div className="flex justify-between bg-slate-600 shadow-lg">
			<div className="logo">
				<img className="w-32" src={LOGO_URL} />
			</div>

			<div className="flex items-center  ">
				<ul className="flex p-3 m-2.5 text-stone-50 font-sans text-lg">
					<li className="px-4">onlineStatus:{onlineStatus ? "✅" : "🔴"}</li>
					<button
						className="px-4"
						onClick={() => {
							btnName === "Login" ? setbtnName("Logout") : setbtnName("Login");
						}}>
						{btnName}
					</button>
					<li className="px-4">
						<Link to={"/"}>Home</Link>{" "}
					</li>
					<li className="px-4">
						<Link to={"/groceries"}>Grocery</Link>
					</li>

					<li className="px-4 font-bold">
						<Link to={"/cart"}>Cart({cartItems.length})</Link>
					</li>
					<li className="px-4">
						<Link to={"/about"}>About</Link>{" "}
					</li>
					<li className="px-4">
						<Link to={"/contact"}>Contact Us</Link>{" "}
					</li>
					<li className="px-4 font-bold text-black">{loggedInUser}</li>
				</ul>
			</div>
		</div>
	);
};
export default Header;
