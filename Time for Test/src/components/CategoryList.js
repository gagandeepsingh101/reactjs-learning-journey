import React, { useState } from "react";
import ItemList from "./ItemList";

const CategoryList = (props) => {
	const { itemsList, showCategoryList , setShowCategoryIndex } = props;
	return (
		<div className="w-9/12 mx-auto p-3 my-2 rounded-lg bg-green-200 cursor-pointer ">
			<div
				onClick={() => {
					setShowCategoryIndex();
				}}
				className="flex justify-between w-full">
				<h1 className="font-bold text-2xl">
					{itemsList?.card?.card?.title}
					<span className="px-2">
						({itemsList?.card?.card?.itemCards.length})
					</span>
				</h1>
				<p className="text-2xl">🔽</p>
			</div>
			{showCategoryList && (
				<div className=" my-2">
					<ItemList itemsList={itemsList?.card?.card?.itemCards}></ItemList>
				</div>
			)}
		</div>
	);
};

export default CategoryList;
