
import React, { Suspense, lazy, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestroMenu from "./components/RestroMenu";
import UserContext from "./utils/UserContext";
let Grocery = lazy(() => import("./components/Grocery"));	
import { Provider } from "react-redux";
import appStore from "./utils/AppStore";
import Cart from "./components/Cart";
let AppLayout = () => {
	const [userName ,setUserName]=useState("Guest");
	return (
		<Provider store={appStore}>
		<UserContext.Provider value={{logInUser:userName,setUserName} }>
		<div className="overflow-x-hidden">
			<Header></Header>
			<Outlet></Outlet>
		</div>
		</UserContext.Provider>
		</Provider>

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
				path: "/cart",
				element: <Cart></Cart>,
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
