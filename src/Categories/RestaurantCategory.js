import { useState } from "react";
import CategoryList from "./CategoryList";

const RestaurantCategory = ({ data, showItem, setshowIndex }) => {
	//const [showItem, setshowItem] = useState(false);
	const handleClick = () => {
		setshowIndex();
	};
	return (
		<div>
			{/*Header */}
			<div className="  m-auto my-6 w-6/12 bg-white shadow-xl  p-4">
				<div
					className="flex justify-between cursor-pointer "
					onClick={handleClick}>
					<span className="font-bold">
						{data.title} ({data.itemCards.length})
					</span>
					<span>⬇️</span>
				</div>

				{showItem && <CategoryList Items={data.itemCards} />}
			</div>
		</div>
	);
};
export default RestaurantCategory;
