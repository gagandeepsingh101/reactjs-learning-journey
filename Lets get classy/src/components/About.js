import React from "react";
import UserClass from "./UserClass";

class About extends React.Component {
	constructor() {
		super();
		console.log("Parent Constructor");
	}

	componentDidMount() {
		console.log("Parent Component did mount");
	}
	render() {
		console.log("Parent Render");
		return (
			<>
				<div className="user-card">
					<UserClass name={"Gagandeep Singh Class"}></UserClass>
				</div>
			</>
		);
	}
}
export default About;
