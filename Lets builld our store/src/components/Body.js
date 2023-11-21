import React, { useContext, useState } from "react";
import RestroContainer from "./RestroContainer";
import Shimmer from "./Shimmer";
import useRestrurantItem from "../utils/useResturantItem";
import UserContext from "../utils/UserContext";

const Body = () => {
	const {logInUser,setUserName}=useContext(UserContext);
	const [reslist, setreslist] = useState(null);
	const defaultList=useRestrurantItem(setreslist);
	const [searchText, setSearchText] = useState("");
	return (
		<div className="">
			<div className="flex gap-4 justify-center py-4 ">
				<input
				className="border-2 border-green-600 rounded-md px-2 py-1 outline-none"
					type="search"
					name=""
					id=""
					value={searchText}
					onChange={(e) => {
						setSearchText(e.target.value);
					}}
				/>
				<button
				className="bg-green-300 hover:bg-green-500 text-gray-900 hover:text-white font-bold py-2 px-4 rounded transition-all duration-500"
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
				className="bg-green-300 hover:bg-green-500 text-gray-900 hover:text-white font-bold py-2 px-4 rounded transition-all duration-500"
					onClick={() => {
						const filterlist = reslist.filter(
							(res) => res.info.avgRating > 4.1
						);
						setreslist(filterlist);
					}}>
					Top Rate Restronaut
				</button>
				<input
				className="border-2 border-green-600 rounded-md px-2 py-1 outline-none"
					type="search"
					name=""
					id=""
					value={logInUser}
					onChange={(e) => {
						setUserName(e.target.value);
					}}
				/>
			</div>
			{
				reslist===null || reslist===undefined ? (
					<Shimmer totalCards={25}></Shimmer>
				) : (
					<RestroContainer resdata={reslist}></RestroContainer>
				)
			}
		</div>
	);
};

export default Body;
