import { useRouteError } from "react-router-dom";
import React from "react";
const Error = () => {
	const err = useRouteError();
	console.log(err);
	return (
		<div>
			<h1>oops!! Something went wrong</h1>
			<h1>{err.status}</h1>
			<h1>{err.statusText}</h1>
		</div>
	);
};
export default Error;
