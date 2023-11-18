import { useEffect, useState } from "react";
import { MENU_API_URL } from "./constants";

const useResturantMenuItem = (restroID) => {
	const [menuItem, setMenuItem] = useState(null);
	useEffect(() => {
		fetchData();
	}, []);
	async function fetchData() {
		const response = await fetch(MENU_API_URL + restroID);
		const menuData = await response.json();
		const restroDetail = menuData?.data?.cards;
		setMenuItem({
			info: restroDetail[0]?.card?.card?.info,
			offfer: restroDetail[1]?.card?.card?.gridElements?.infoWithStyle?.offers,
			menu:
				restroDetail.length === 4
					? restroDetail[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card
							.card.itemCards
					: restroDetail[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card
							.card.itemCards,
		});
	}
	return menuItem;
};
export default useResturantMenuItem;
