import React from "react";
import RestroCard from "./RestroCard";

const RestroContainer = (props) => {
	const {resdata} = props;
	return (
		<div className="restro-container">
			{resdata.map((restrunaut) => (
				<RestroCard key={restrunaut.info.id} resData={restrunaut}></RestroCard>
			))}
		</div>
	);
};

export default RestroContainer;
