import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import cors from "cors"

let AppLayout = () => {
	return (
		<>
			<Header></Header>
			<Body></Body>
		</>
	);
};

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
