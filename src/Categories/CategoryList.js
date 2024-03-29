import { useDispatch } from "react-redux";
import { CDN_URL } from "../Utils/constant";
import React from "react";
import { addItem } from "../StoreRE/CartSlice";

const CategoryList = ({ Listitems }) => {
	const dispatch = useDispatch();
	const HandleAddItem = (item) => {
		dispatch(addItem(item));
	};
	return (
		<div>
			{Listitems.map((item, index) => (
				<div
					key={`${item.card.info.id}-${index}`}
					className="p-2 m-2  border-gray-400 border-b-2 text-left flex justify-between">
					<div className="w-9/12">
						<div className="py-2">
							<span className="font-semibold">{item.card.info.name}</span>
							<span>
								{" "}
								-₹{" "}
								{item.card.info.price
									? item.card.info.price / 100
									: item.card.info.defaultPrice / 100}
							</span>
						</div>
						<p className="text-sm font-sans">{item.card.info.description}</p>
					</div>
					<div className="w-3/12 p-4">
						<div className="absolute">
							<button
								onClick={() => HandleAddItem(item)}
								className="p-2 mx-16 rounded-lg bg-white shadow-lg font-bold text-green-500">
								Add +
							</button>
						</div>
						<img src={CDN_URL + item.card.info.imageId} />
					</div>
				</div>
			))}
		</div>
	);
};

export default CategoryList;
