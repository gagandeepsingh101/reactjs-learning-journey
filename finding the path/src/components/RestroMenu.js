import { useParams } from "react-router-dom";
import { fetchRestroMenu } from "../utils/fetchdata";
import { useEffect, useState } from "react";
const RestroMenu = () => {
	let { restroID } = useParams();
	const [menuItem, setMenuItem] = useState([]);
	useEffect(() => {
		fetchRestroMenu(setMenuItem, restroID);
	}, []);
	console.log(menuItem);
	// <h1>{menuItem.menu[0].card.info.name}</h1>

	return (
		<div className="restro-menu-container">
			<div className="info-container">
				<h1>{menuItem?.info?.name}</h1>
				<h1>{menuItem?.info?.avgRating}</h1>
				<h1>{menuItem?.info?.areaName}</h1>
			</div>
			<hr />
			<div className="menu-container">
				{
                    menuItem?.menu?.map((item,idx)=>{
                       return  <h1 key={idx}>{item.card.info.name}</h1>
                    })
            }
			</div>
		</div>
	);
};
export default RestroMenu;
