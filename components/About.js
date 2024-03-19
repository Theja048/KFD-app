import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends Component {
	constructor(props) {
		super(props);
		console.log("Parent Constructor");
	}
	componentDidMount() {
		console.log("Parent Component did Mount");
	}
	render() {
		console.log("Parent Render");
		return (
			<div>
				<h1>Kiddo Food Delivery </h1>
				<h2>
					delivering most delicious and spicy Food
					<span>Efficiently and within Time without any delay or damage</span>
				</h2>

				<User name={"Teja (function)"} Location={"Hyderabad"} />
				<UserClass
					name={"Kiddo (class base)"}
					Location={"Hyderabad (class base)"}
				/>
			</div>
		);
	}
}

export default About;
