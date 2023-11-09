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
