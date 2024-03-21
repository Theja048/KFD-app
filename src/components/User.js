import { useState } from "react";

const User = (props) => {
	const [count, setcount] = useState(0);

	return (
		<div>
			<div className="user">
				<h1>Details</h1>
				<h1>count:-{count}</h1>

				<button
					onClick={() => {
						setcount(count + 1);
					}}>
					increase
				</button>
				<h2>name:{props.name}</h2>
				<h2>Location:{props.Location}</h2>
			</div>
		</div>
	);
};

export default User;
