import { useEffect, useState } from "react";
import { RESTRONAUT_CONTAINER_ITEM } from "./constants";

function useRestrurantItem(setreslist) {
	const [resContainerItem, setResContainerItem] = useState(null);
	useEffect(() => {
		fetchdata();
	}, []);

	const fetchdata = async () => {
		const response = await fetch(RESTRONAUT_CONTAINER_ITEM);
		const data = await response.json();
		setResContainerItem(
			data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants

		);
		setreslist(
			data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants

		);
	};
	return resContainerItem;
}
export default useRestrurantItem;
