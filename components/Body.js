import RestaurantCard from "../components/RestaurantCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Shimmer } from "./Shimmer";
import { REST_URL } from "../Utils/constant";
import "../style.css";
const Body = () => {
	const [listofRestarant, setlistofRestarant] = useState([]);
	const [searchText, setsearchText] = useState("");
	const [filterList, setfilterList] = useState([]);

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		const sdata = await fetch(REST_URL);
		const json = await sdata.json();
		console.log(json);

		setlistofRestarant(
			json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
		);
		setfilterList(
			json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
		);
	};

	return listofRestarant.length === 0 ? (
		<Shimmer />
	) : (
		<div className="body">
			<div className="filter">
				<div className="search">
					<input
						type="text"
						className="search-box"
						value={searchText}
						onChange={(e) => {
							setsearchText(e.target.value);
						}}></input>
					<button
						className="search-btn"
						onClick={() => {
							//filtr and update ui
							// console.log(searchText)

							const filterList = listofRestarant.filter((rest) =>
								rest.info.name.toLowerCase().includes(searchText)
							);
							setfilterList(filterList);
						}}>
						Serach
					</button>
				</div>
				<button
					className="filter-btn"
					onClick={() => {
						const filterList = listofRestarant.filter(
							(res) => res.info.avgRating > 4.2
						);
						setlistofRestarant(filterList);
					}}>
					Filter
				</button>
			</div>
			<div className="Rest-container">
				{filterList?.map((restaurant) => (
					<Link
						className="no-underline"
						key={restaurant.info.id}
						to={"/restaurant/" + restaurant.info.id}>
						<RestaurantCard resData={restaurant} />
					</Link>
				))}
			</div>
		</div>
	);
};

export default Body;
