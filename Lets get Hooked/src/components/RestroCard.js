import React from "react";
import { CDN_URL } from "../utils/constants";

const RestroCard = (props) => {
	const { resData } = props;
	const {
		name,
		avgRating,
		cuisines,
		areaName,
		costForTwo,
		cloudinaryImageId,
		deliveryTime,
	} = resData.info;
	return (
		<div className="restro-profile">
			<img
				src={
                    CDN_URL
					 +
					cloudinaryImageId
				}
				alt=""
			/>
			<h4>{name}</h4>
			<h4>
				{avgRating} {deliveryTime}
			</h4>
			<p>{cuisines.slice(0, 3).join(" , ")}</p>
			<p>{areaName}</p>
			<p>{costForTwo}</p>
		</div>
	);
};

export default RestroCard;
