import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import ItemList from "./ItemList";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartslice";
import { Link } from "react-router-dom";
useDispatch;
const Cart = () => {
	const items = useSelector((store) => store.cart.items);
	console.log(items);
	const dispatch = useDispatch();

	const removeAllItem = () => {
		dispatch(clearCart());
	};
	return (
		<div className="w-6/12 mx-auto my-10 flex flex-col items-center">
			<h1 className="text-4xl font-bold uppercase text-center mb-5">
				Cart Item
			</h1>
			{items.length === 0 && (
				<div className="flex flex-col items-center">
					<h1 className="text-2xl font-bold text-center m-5">
						Lets try some food what you will like😅😅😅😅
					</h1>
                    <Link className="text-xl px-3 py-2 bg-green-300 hover:bg-green-500 hover:text-white rounded-xl transition-all duration-500" to={"/"}>Go Back</Link>
				</div>
			)}
			<ItemList itemsList={items}></ItemList>
			{items.length > 0 && (
				<button
					className="bg-green-700 text-white px-3 py-2 rounded"
					onClick={removeAllItem}>
					Clear All
				</button>
			)}
		</div>
	);
};

export default Cart;
