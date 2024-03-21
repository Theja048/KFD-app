import { CDN_URL } from "../Utils/constant";

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
		<div className="res-card">
			{<img className="res-pic" src={imgsrc} alt="restaurant image" />}
			<h3>{name}</h3>
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
