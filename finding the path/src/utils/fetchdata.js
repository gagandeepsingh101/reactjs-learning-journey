export const fetchdata = async (setreslist, defaultList) => {
	const response = (
		await fetch(
			"https://www.swiggy.com/mapi/homepage/getCards?lat=25.2053227&lng=75.8359645"
		)
	).json();
	const backendData = await response;
	// console.log(backendData.data.success.cards[4].gridWidget.gridElements.infoWithStyle.restaurants);
	// console.log(backendData);

	setreslist(
		backendData?.data?.success?.cards[4]?.gridWidget?.gridElements
			?.infoWithStyle?.restaurants
	);
	defaultList(
		backendData?.data?.success?.cards[4]?.gridWidget?.gridElements
			?.infoWithStyle?.restaurants
	);
};

export const fetchRestroMenu = async (setMenuItem, restroID) => {
	const response = await fetch(
		"https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.2053227&lng=75.8359645&restaurantId="+restroID+"&catalog_qa=undefined&submitAction=ENTER"
		);
		const menuData = await response.json();
		const restroDetail=menuData?.data?.cards;
	setMenuItem({
		info: restroDetail[0]?.card?.card?.info,
		offfer: restroDetail[1]?.card?.card?.gridElements?.infoWithStyle?.offers,
		menu: restroDetail.length===4?restroDetail[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card.card.itemCards:restroDetail[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card.card.itemCards,
	});
};
