import { useEffect, useState, useContext } from "react";
import React from "react";
import { Link } from "react-router-dom";
import { IMG_CAROUSEL, REST_URL } from "../Utils/constant";
import useOnlineStatus from "../Utils/useOnlineStatus";
import RestaurantCard from "./RestaurantCard";
import userContext from "../Utils/userContext";
import ShimmerHome from "../Shimmer/ShimmerHome";

const Body = () => {
	const [listofRestarant, setlistofRestarant] = useState([]);
	const [searchText, setsearchText] = useState("");
	const [filterList, setfilterList] = useState([]);
	const [foodlist, setfoodlist] = useState([]);
	//console.log(listofRestarant);

	useEffect(() => {
		fetchData();
		foodList();
	}, []);

	const fetchData = async () => {
		const data = await fetch(REST_URL);
		const json = await data.json();
		console.log(json);
		// console.log(REST_URL);

		setlistofRestarant(
			json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
		);
		setfilterList(
			json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
		);
	};
	const foodList = async () => {
		const list = await fetch(REST_URL);
		const json1 = await list.json();
		console.log(json1);

		const items =
			json1?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info;

		// Map over the array of items and create a list of JSX elements
		setfoodlist(items);
	};
	const handleFoodScrollLeft = () => {
		const foodCategory = document.querySelector(".food-category");
		foodCategory.scrollLeft -= getScrollAmount();
	};

	const handleFoodScrollRight = () => {
		const foodCategory = document.querySelector(".food-category");
		foodCategory.scrollLeft += getScrollAmount();
	};
	const getScrollAmount = () => {
		// Define different scroll amounts based on screen size
		if (window.innerWidth < 640) {
			return 100; // For smaller screens, scroll by 100 pixels
		} else {
			return 250; // For larger screens, scroll by 250 pixels
		}
	};
	const onlineStatus = useOnlineStatus();
	if (onlineStatus === false)
		return <h1>Looks like you are offline, Check your internet connection</h1>;

	const { loggedInUser, setuserName } = useContext(userContext);
	return listofRestarant.length === 0 ? (
		<ShimmerHome />
	) : (
		<div className="body">
			<div>
				<h2 className="text-xl text-black font-bold mb-2">
					What's on your mind?
					<div className="flex justify-end">
						<button
							onClick={handleFoodScrollRight}
							className="text-5xl text-zinc-500">
							→
						</button>
						<button
							onClick={handleFoodScrollLeft}
							className="text-5xl text-zinc-500">
							←
						</button>
					</div>
				</h2>
			</div>
			<div className="food-category overflow-x-scroll scroll-smooth  w-[1500px]">
				<h3 className="flex mt-1">
					{foodlist.map((item) => (
						<div key={item.id}>
							<div className="flex-shrink-0 w-36 sm:w-48 md:w-56 p-2">
								<img
									className=" text-black"
									src={`${IMG_CAROUSEL}${item.imageId}`}
									alt={item.name}
								/>
								<h4>{item.name}</h4>
							</div>
						</div>
					))}
				</h3>
			</div>

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

			<h2 className="text-2xl text-black font-bold">
				Top Restaurants in Hyderabad
			</h2>
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
