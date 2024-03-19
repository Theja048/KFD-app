import react from "react";
class UserClass extends react.Component {
	constructor(props) {
		super(props);

		this.state = {
			count: 0,
		};
		console.log("Child Constructor");
	}
	componentDidMount() {
		console.log("Child Component did Mount");
	}
	render() {
		console.log("Render Child");
		const { name, Location } = this.props;
		const { count } = this.state;
		return (
			<div className="user">
				<h1>{count}</h1>
				<button
					onClick={() => {
						this.setState({
							count: this.state.count + 1,
						});
					}}>
					click
				</button>
				<h2>name:{name}</h2>
				<h2>Location:{Location}</h2>
			</div>
		);
	}
}
export default UserClass;
