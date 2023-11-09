import React, { useEffect, useState } from "react";
import RestroContainer from "./RestroContainer";
import { fetchdata } from "../utils/fetchdata";
import Shimmer from "./Shimmer";

const Body = () => {
	const [reslist, setreslist] = useState([]);
	const [defaultList, setDefaultList] = useState([]);
	const [searchText, setSearchText] = useState("");
	useEffect(() => {
		fetchdata(setreslist, setDefaultList);
	}, []);
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
							filterlist.length === 0 ? alert("Food Name is not matched") : setreslist(filterlist);
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
			{reslist.length === 0 ? (
				<Shimmer totalCards={25}></Shimmer>
			) : (
				<RestroContainer resdata={reslist}></RestroContainer>
			)}
		</div>
	);
};

export default Body;
