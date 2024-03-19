import { useRouteError } from "react-router-dom";

const Error = () => {
	const err = useRouteError();
	console.log(err);
	return (
		<>
			<h1>oops!! Something went wrong</h1>
			<h1>{err.status}</h1>
			<h1>{err.statusText}</h1>
		</>
	);
};
export default Error;
