import React, { useState } from "react";
import RestroContainer from "./RestroContainer";
import { resArrayobj } from "../utils/mockdata";
const Body = () => {
	const [reslist, setreslist] = useState(resArrayobj);
	return (
		<div className="main-container">
			<div className="search-container">
				<input type="search" onChange={(e)=>{
					console.log(e.target.value);
				}} name="" id="" />
				<button onClick={() => {
					const filterlist = reslist.filter((res) => res.info.avgRating > 4.1);
					setreslist(filterlist);
				}}>Search Item</button>

				<button
					onClick={() => {
						const filterlist = reslist.filter((res) => res.info.avgRating > 4.1);
						setreslist(filterlist);
					}}>
					Top Rate Restronaut
				</button>
			</div>
			<RestroContainer resdata={reslist}></RestroContainer>
		</div>
	);
};

export default Body;
