import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import userContext from "../Utils/userContext";
class About extends Component {
	constructor(props) {
		super(props);
		//console.log("Parent Constructor");
	}
	componentDidMount() {
		//console.log("Parent Component did Mount");
	}
	render() {
		//console.log("Parent Render");
		return (
			<div>
				<h1>Kiddo Food Delivery </h1>
				<h2>
					delivering most delicious and spicy Food
					<span>Efficiently and within Time without any delay or damage</span>
				</h2>

				<div>
					<userContext.Consumer>
						{({ loggedInUser }) => (
							<h1 className="text-lg font-bold">{loggedInUser}</h1>
						)}
					</userContext.Consumer>
				</div>
				<UserClass
					name={"Raviteja"}
					Location={"Hyderabad"}
					Role={"Full Stack Web developer"}
				/>
			</div>
		);
	}
}

export default About;
