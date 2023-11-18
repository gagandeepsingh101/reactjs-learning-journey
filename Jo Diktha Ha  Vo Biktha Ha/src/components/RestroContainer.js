import React from "react";
import RestroCard from "./RestroCard";
import { Link } from "react-router-dom";

const RestroContainer = (props) => {
	const { resdata } = props;

	return (
		<div className="flex flex-wrap justify-center py-5 w-screen">
			{resdata.map((restrunaut) => (
				<Link key={restrunaut.info.id} to={`/restroMenu/${restrunaut.info.id}`}>
					<RestroCard
						key={restrunaut.info.id}
						resData={restrunaut}></RestroCard>
				</Link>
			))}
		</div>
	);
};

export default RestroContainer;
