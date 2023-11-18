
import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestroMenu from "./components/RestroMenu";
let Grocery = lazy(() => import("./components/Grocery"));	
let AppLayout = () => {
	return (
		<div className="overflow-x-hidden">
			<Header></Header>
			<Outlet></Outlet>
		</div>
	);
};

let app = createBrowserRouter([
	{
		path: "/",
		element: <AppLayout />,
		errorElement: <Error></Error>,
		children: [
			{
				path: "/",
				element: <Body />,
			},
			{
				path: "/about",
				element: <About />,
			},
			{
				path: "/contact",
				element: <Contact />,
			},
			{
				path: "/grocery",
				element: <Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense>,
			},
			{
				path: "/restroMenu/:restroID",
				element: <RestroMenu />,
			},
		],
	},
]);

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={app}></RouterProvider>);
