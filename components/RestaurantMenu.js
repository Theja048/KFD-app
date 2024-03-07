import { useEffect, useState } from "react";
import { Shimmer } from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../Utils/constant";

const RestaurantMenu = () => {
	const [resInfo, setresInfo] = useState(null);
	// const params = useParams()
	// console.log(params)
	const { resId } = useParams();

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		const data = await fetch(MENU_API + resId);
		const json = await data.json();
		console.log(json);
		setresInfo(json.data);
	};
	if (resInfo === null) {
		return <Shimmer />;
	}
	const { name, cuisines, areaName, sla, costForTwoMessage } =
		resInfo?.cards[0]?.card?.card?.info;

	const { itemCards } =
		resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
	console.log(itemCards);
	return (
		<div className="menu">
			<h1>{name}</h1>
			<h6>{cuisines.join(",")}</h6>
			<h6>
				{areaName},{sla.lastMileTravelString}
			</h6>

			<h5>
				{sla.slaString} - {costForTwoMessage}{" "}
			</h5>

			<h1>Recommended</h1>
			<ul>
				{itemCards.map((items) => (
					<li key={items?.card?.info?.id}>
						{items?.card?.info?.name} - {" Rs."}
						{items?.card?.info?.price / 100 ||
							items?.card?.info?.defaultPrice / 100}{" "}
					</li>
				))}
			</ul>
		</div>
	);
};
export default RestaurantMenu;
