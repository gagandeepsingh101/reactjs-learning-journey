const Contact = () => {
	return (
		<div className="bg-green-200 w-6/12 mx-auto my-3 p-4 rounded-lg flex flex-col gap-4 items-center">
			<h1 className="text-6xl font-bold">Contact Us</h1>
			<input className="w-11/12 p-4 text-lg rounded-lg" type="text" placeholder="Enter your Name" />
			<input className="w-11/12 p-4 text-lg rounded-lg" type="text" placeholder="Enter your feedback"/>
            <button className="py-4 px-6 text-xl bg-green-600 rounded-lg text-white">Submit</button>
		</div>
	);
};
export default Contact;
