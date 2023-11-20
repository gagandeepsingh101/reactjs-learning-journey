import React from "react";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";
class About extends React.Component {
	constructor() {
		super();
		// console.log("Parent Constructor");
	}

	componentDidMount() {
		// console.log("Parent Component did mount");
	}
	componentWillUnmount() {
		// console.log("Parent Component Will Unmount");
	}
	render() {
		// console.log("Parent Render");
		return (
			<>
				<div className="user-card">
					{
						<UserClass name={"Gagandeep Singh Class"}></UserClass>
					}
					
					<UserContext.Consumer>
					{({logInUser})=><h4>{logInUser}</h4>}
					</UserContext.Consumer>
				</div>
			</>
		);
	}
}
export default About;
