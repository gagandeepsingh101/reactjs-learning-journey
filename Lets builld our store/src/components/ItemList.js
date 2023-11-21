import React from "react";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartslice";
import { useDispatch } from "react-redux";

const ItemList = (props) => {

	const dispatch = useDispatch();
	const addItemInCart = (item) => {
		dispatch(addItem(item));
	};

	const { itemsList } = props;
	return (
		<div className=" border-t-4 border-green-700">
			{itemsList?.map((item) => (
				<div
					key={item.card.info.id}
					className=" my-3 flex justify-between items-center  border-b-2 border-green-700">
					<div className="w-9/12 flex flex-col gap-2 mb-3">
						<h1 className="font-bold">{item.card.info.name}</h1>
						<p>
							₹-
							{item.card.info.defaultPrice
								? item.card.info.defaultPrice / 100
								: item.card.info.price / 100}
						</p>
						<p>
							{item.card.info.description
								? item.card.info.description
								: "Let you provide which type decription suggested for such food by eating it"}
						</p>
					</div>
					<div className="w-3/12 p-3 relative rounded-xl">
						{item.card.info.imageId ? (
							<div>
								<img
									className=" w-full h-40 rounded-xl"
									src={CDN_URL + item.card.info.imageId}
									alt=""
								/>
								<button
								onClick={() => addItemInCart(item)}
								 className="font-bold bg-green-700 text-white px-3 py-2 absolute bottom-3 rounded-tr-xl  rounded-bl-xl">
									Add+
								</button>
							</div>
						) : (
							<div>
								<button
								onClick={() => addItemInCart(item)}
								 className="font-bold bg-green-700 text-white px-3 py-2 absolute bottom-3 rounded-xl">
									Add+
								</button>
							</div>
						)}
					</div>
				</div>
			))}
		</div>
	);
};

export default ItemList;
