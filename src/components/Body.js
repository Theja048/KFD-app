import { useEffect, useState, useContext } from "react";
import React from "react";
import { Link } from "react-router-dom";
import { Shimmer } from "./Shimmer";
import { REST_URL } from "../Utils/constant";
import useOnlineStatus from "../Utils/useOnlineStatus";
import RestaurantCard from "./RestaurantCard";
import userContext from "../Utils/userContext";
const Body = () => {
	const [listofRestarant, setlistofRestarant] = useState([]);
	const [searchText, setsearchText] = useState("");
	const [filterList, setfilterList] = useState([]);
	//console.log(listofRestarant);

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		const data = await fetch(REST_URL);
		const json = await data.json();
		console.log(json);
		// console.log(REST_URL);

		setlistofRestarant(
			json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
		);
		setfilterList(
			json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
		);
	};

	const onlineStatus = useOnlineStatus();
	if (onlineStatus === false)
		return <h1>Looks like you are offline, Check your internet connection</h1>;

	const { loggedInUser, setuserName } = useContext(userContext);
	return listofRestarant.length === 0 ? (
		<Shimmer />
	) : (
		<div className="body">
			<div className="filter flex">
				<div className="search m-4 p-4">
					<input
						type="text"
						className=" border  border-solid border-black "
						value={searchText}
						onChange={(e) => {
							setsearchText(e.target.value);
						}}></input>
					<button
						className=" bg-lime-600 px-3 py-1.5 rounded-md m-4 text-gray-50"
						onClick={() => {
							//filtr and update ui
							// console.log(searchText)

							const filterList = listofRestarant.filter((rest) =>
								rest.info.name.toLowerCase().includes(searchText)
							);
							setfilterList(filterList);
						}}>
						Search
					</button>
				</div>
				<div className="search p-4 m-4 flex items-center  ">
					<button
						className="px-3.5 py-2 bg-indigo-900 rounded-lg text-gray-50 "
						onClick={() => {
							const filterList = listofRestarant.filter(
								(res) => res.info.avgRating > 4.2
							);
							setlistofRestarant(filterList);
						}}>
						Filter
					</button>
				</div>
				<div className="search p-4 m-4 flex items-center   ">
					<label className="p-1">UserName:</label>
					<input
						className="border border-black p-1"
						onChange={(e) => setuserName(e.target.value)}
					/>
				</div>
			</div>
			<div className="flex flex-wrap">
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
