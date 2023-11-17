import React from "react";

const Shimmer = (porps) => {
	const {totalCards}=porps;
	const shimmerCreate= Array.from({length:totalCards}).map((ele,idx)=>{
		return <div key={idx} className="restro-shimmer"></div>
	});

	return (
		<div className="restro-container"> 
		{shimmerCreate}
		</div>
	);
};

export default Shimmer;
