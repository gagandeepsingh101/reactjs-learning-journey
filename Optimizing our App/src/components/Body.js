import React, { useState } from "react";
import RestroContainer from "./RestroContainer";
import Shimmer from "./Shimmer";
import useRestrurantItem from "../utils/useResturantItem";

const Body = () => {
	const [reslist, setreslist] = useState(null);
	const defaultList=useRestrurantItem(setreslist);
	const [searchText, setSearchText] = useState("");
	return (
		<div className="main-container">
			<div className="search-container">
				<input
					type="search"
					name=""
					id=""
					value={searchText}
					onChange={(e) => {
						setSearchText(e.target.value);
					}}
				/>
				<button
					onClick={() => {
						if (!searchText) {
							setreslist(defaultList);
						} else {
							let allFood = defaultList;
							const filterlist = allFood.filter((res) =>
								res.info.name.toLowerCase().includes(searchText.toLowerCase())
							);
							filterlist.length === 0
								? alert("Food Name is not matched")
								: setreslist(filterlist);
						}
					}}>
					Search Item
				</button>
				<button
					onClick={() => {
						const filterlist = reslist.filter(
							(res) => res.info.avgRating > 4.1
						);
						setreslist(filterlist);
					}}>
					Top Rate Restronaut
				</button>
			</div>
			{
				reslist===null ? (
					<Shimmer totalCards={25}></Shimmer>
				) : (
					<RestroContainer resdata={reslist}></RestroContainer>
				)
			}
		</div>
	);
};

export default Body;
