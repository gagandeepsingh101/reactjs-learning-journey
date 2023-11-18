import React from "react";

const Shimmer = (porps) => {
	const {totalCards}=porps;
	const shimmerCreate= Array.from({length:totalCards}).map((ele,idx)=>{
		return <div key={idx} className="bg-green-100 w-96 h-96 rounded-xl "></div>
	});

	return (
		<div className="flex flex-wrap justify-center gap-10"> 
		{shimmerCreate}
		</div>
	);
};

export default Shimmer;
