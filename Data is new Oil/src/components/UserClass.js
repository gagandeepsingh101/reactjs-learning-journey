import React from "react";
class UserClass extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			count1: 0,
			count2: 0,
		};
		console.log("Child Constructor")
	}
	componentDidMount() {
		console.log("Child Component did Mount");
	}
	render() {
		console.log("Child Render");
		const { count1, count2 } = this.state;
		const { name } = this.props;
		return (
			<>
				<h1>{name}</h1>
				<h1>Count1:{count1}</h1>

				<h1>Count2:{count2}</h1>
				<button onClick={() => this.setState({
                    count1: count1 + 1,
                    count2:count2 + 1
                })}>Increase</button>
			</>
		);
	}
}
export default UserClass;
