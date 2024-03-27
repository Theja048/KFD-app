import { useDispatch, useSelector } from "react-redux";
import React from "react";
import CategoryList from "../Categories/CategoryList";
import { clearCart, removeItem } from "./CartSlice";
const Cart = () => {
	const cartitems = useSelector((store) => store.cart.items);

	const dispatch = useDispatch();
	const handleRemove = () => {
		dispatch(removeItem());
	};

	const handleClear = () => {
		dispatch(clearCart());
	};

	return (
		<div className="text-center m-4 p-5">
			<h1 className="text-2xl font-bold"> Welcome here your CartItems</h1>

			<div className="w-6/12  m-auto">
				<CategoryList Listitems={cartitems} />
			</div>

			<div>
				{cartitems.length > 0 && (
					<>
						<button
							onClick={handleRemove}
							className="p-2 m-2 bg-black text-white rounded-md">
							Remove Cart
						</button>
						<button
							onClick={handleClear}
							className="p-2 m-2 bg-red-500 text-white rounded-md">
							Clear All
						</button>
					</>
				)}
				{cartitems.length === 0 && <h1>OOPS! your Cart is empty😓</h1>}
			</div>
		</div>
	);
};
export default Cart;
