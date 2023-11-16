import React, { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
	const [btnText, setBtnText] = useState("Login");
	return (
		<div className="header">
			<div className="logo-contanier">
				<img className="image" src={LOGO_URL} alt="" />
			</div>
			<div className="nav-container">
				<ul className="nav-list">
					<li className="nav-item"><Link to="/">Home</Link></li>
					<li className="nav-item"><Link to="/about">About Us</Link></li>
					<li className="nav-item"><Link to="/contact">Contact Us</Link></li>
					<button
						className="nav-item loginBtn"
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
