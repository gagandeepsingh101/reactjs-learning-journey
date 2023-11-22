import React, { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";


const Header = () => {
	const onlineStatus = useOnlineStatus();
	const [btnText, setBtnText] = useState("Login");
	const {logInUser}=useContext(UserContext);
	const cartItemLength= useSelector((store)=>store.cart.items.length);
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
					<li className="px-3 py-2 text-lg "><Link to={"/cart"}>🛒<sup data-testid="cartitems">{cartItemLength}</sup></Link></li>
					<button
						className=" px-3 py-2 hover:bg-green-500 hover:text-white rounded transition-all duration-500"
						onClick={() => {
							btnText === "Login" ? setBtnText("Logout") : setBtnText("Login");
						}}>
						{btnText}
					</button>
					<h4 className="px-3 py-2">{logInUser}</h4>
				</ul>
			</div>
		</div>
	);
};
export default Header;
