import React, { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
	const onlineStatus = useOnlineStatus();
	const [btnText, setBtnText] = useState("Login");
	return (
		<div className="flex bg-green-100 items-center justify-between px-4 ">
			<div className="w-20 px-4 py-3">
				<img className="image" src={LOGO_URL} alt="" />
			</div>
			<div className="bg-white px-5 py-2 rounded-lg">
				<ul className="flex gap-2" >
				<li className="px-3 py-2">Online Status:{onlineStatus?"🟢":"🔴"}</li>
					<li className=" px-3 py-2 hover:bg-green-500 hover:text-white rounded transition-all duration-500" ><Link to="/">Home</Link></li>
					<li className="px-3 py-2 hover:bg-green-500 hover:text-white rounded transition-all duration-500"><Link to="/about">About Us</Link></li>
					<li className="px-3 py-2 hover:bg-green-500 hover:text-white rounded transition-all duration-500"><Link to="/contact">Contact Us</Link></li>
					<li className="px-3 py-2 hover:bg-green-500 hover:text-white rounded transition-all duration-500"><Link to="/grocery">Grocery</Link></li>
					<button
						className=" px-3 py-2 hover:bg-green-500 hover:text-white rounded transition-all duration-500"
						onClick={() => {
							btnText === "Login" ? setBtnText("Logout") : setBtnText("Login");
						}}>
						{btnText}
					</button>
				</ul>
			</div>
		</div>
	);
};
export default Header;
