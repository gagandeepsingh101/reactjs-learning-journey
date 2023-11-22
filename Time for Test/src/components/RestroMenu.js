import { useParams } from "react-router-dom";
import useResturantMenuItem from "../utils/useResturantMenuItem";
import CategoryList from "./CategoryList";
import { useState } from "react";
const RestroMenu = () => {
	let { restroID } = useParams();
	const [showCategoryIndex, setShowCategoryIndex] = useState(null);
	const menuItem = useResturantMenuItem(restroID);
	let categoryList;
	if (menuItem?.menu) {
		categoryList = menuItem?.menu.cards.filter(
			(item) =>
				item.card.card["@type"] ===
				"type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
		);
	}
	return (
		<div>
			<div className="flex flex-col items-center my-3 ">
				<span className="text-2xl font-bold">{menuItem?.info?.name}</span>
				<span>{menuItem?.info?.areaName}</span>
			</div>
			{categoryList?.map((category, idx) => (
				<CategoryList
					key={category?.card?.card?.title}
					itemsList={category}
					showCategoryList={idx === showCategoryIndex ? true : false}
					setShowCategoryIndex={()=>setShowCategoryIndex(idx)}
				/>
			))}
		</div>
	);
};
export default RestroMenu;
