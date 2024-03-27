import { useEffect, useState } from "react";
import React from "react";
import { Shimmer } from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../Utils/useRestaurantMenu";
import RestaurantCategory from "../Categories/RestaurantCategory";
const RestaurantMenu = () => {
	const { resId } = useParams();

	const resInfo = useRestaurantMenu(resId);
	const [showIndex, setshowIndex] = useState(null);
	if (resInfo === null) {
		return <Shimmer />;
	}
	const { name, cuisines, areaName, sla, costForTwoMessage } =
		resInfo?.cards[2]?.card?.card?.info;

	const { itemCards } =
		resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
	console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

	const categories =
		resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
			(c) =>
				c.card?.card?.["@type"] ===
				"type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
		);

	return (
		<div className="text-center">
			<h1 className="font-bold text-2xl font-sans my-6">{name}</h1>
			<p className="font-semibold  text-lg text-zinc-400">
				{cuisines.join(",")}
			</p>
			<p className="text-lg text-zinc-400">
				{areaName} {sla.lastMileTravelString}
			</p>
			<div>
				<h3 className="text-xl my-4 text-slate-800 ">
					{sla.slaString} {costForTwoMessage}
				</h3>
			</div>
			{categories.map((category, index) => (
				<RestaurantCategory
					key={category?.card?.card?.title}
					data={category?.card?.card}
					showItem={index === showIndex ? true : false}
					setshowIndex={() => setshowIndex(index)}
				/>
			))}
		</div>
	);
};
export default RestaurantMenu;
