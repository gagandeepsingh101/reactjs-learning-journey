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
		<div className="w-4/5 flex justify-center flex-col border-green-300 border-4 hover:shadow-lg hover:shadow-green-400 mx-5 my-5 rounded-xl px-2 py-2">
			
			<img className=" rounded-2xl w-96 h-72 "
				src={
                    CDN_URL
					 +
					cloudinaryImageId
				}
				alt=""
			/>
			<h4 className="font-bold">{name}</h4>
			<h4>
				{avgRating} {deliveryTime}
			</h4>
			<p>{cuisines.slice(0, 3).join(" , ")}</p>
			<p>{areaName}</p>
			<p>{costForTwo}</p>
		</div>
	);
};

export const withVegLabelCard=(RestroCard) => {
	return (props)=>{
		return <div className="relative">
		<label className=" absolute z-50 top-2 left-7 font-bold  p-2 rounded-tl-xl bg-green-500 text-white px-2">Veg</label>
		<RestroCard {...props}/>
		</div>
	}
}

export default RestroCard;
