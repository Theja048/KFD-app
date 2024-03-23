import { CDN_URL } from "../Utils/constant";
import React from "react";
const RestaurantCard = (props) => {
	const { resData } = props;
	// Ensure resData is defined
	const {
		cloudinaryImageId,
		name,
		cuisines,
		avgRatingString,
		sla,
		costForTwo,
		locality,
		areaName,
	} = resData.info;
	const imgsrc = `${CDN_URL}${cloudinaryImageId}`;
	return (
		<div className="m-3 p-3 w-[190px] rounded-lg bg-slate-100 hover:bg-gray-300">
			{
				<img
					className="res-pic rounded-lg"
					src={imgsrc}
					alt="restaurant image"
				/>
			}
			<h3 className="font-bold py-4 text-lg">{name}</h3>
			<h4 className="cuisin">{cuisines.join(", ")}</h4>
			<h6>{avgRatingString} stars</h6>
			<h6>{sla.slaString}</h6>
			{costForTwo && (
				<h6 style={{ color: costForTwo > 300 ? "red" : "green" }}>
					{costForTwo}
				</h6>
			)}
			<h6>{locality} </h6>
			<h6>{areaName}</h6>
		</div>
	);
};
export default RestaurantCard;
