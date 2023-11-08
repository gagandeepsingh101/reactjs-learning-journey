import React from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
	return (
		<div className="header">
			<div className="logo-contanier">
				<img
					className="image"
					src={LOGO_URL}
					alt=""
				/>
			</div>
			<div className="nav-container">
				<ul className="nav-list">
					<li className="nav-item">Home</li>
					<li className="nav-item">About Us</li>
					<li className="nav-item">Contact Us</li>
					<li className="nav-item">Login</li>
				</ul>
			</div>
		</div>
	);
};

export default Header;
