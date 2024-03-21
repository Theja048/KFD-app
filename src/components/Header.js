import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import { LOGO_URL } from "../Utils/constant";

const Header = () => {
	const [btnName, setbtnName] = useState("Login");
	const onlineStatus = useOnlineStatus();

	return (
		<div className="flex">
			<div className="logo">
				<img className="w-44" src={LOGO_URL} />
			</div>

			<div className="nav-Items">
				<ul>
					<li>onlineStatus:{onlineStatus ? "✅" : "🔴"}</li>
					<button
						className="login"
						onClick={() => {
							btnName === "Login" ? setbtnName("Logout") : setbtnName("Login");
						}}>
						{btnName}
					</button>
					<li>
						<Link to={"/"}>Home</Link>{" "}
					</li>
					<li>
						<Link to={"/groceries"}>Grocery</Link>
					</li>
					<li>
						<Link to={"/about"}>About</Link>{" "}
					</li>
					<li>
						<Link to={"/contact"}>Contact Us</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};
export default Header;
