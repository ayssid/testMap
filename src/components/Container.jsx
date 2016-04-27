import React from 'react';
import MyMap from './MyMap.jsx';

class Container extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {

		var center = {
			lat: -6.3509288,
			lng: 106.6649545
		};

		return (
			<div>
				<nav className="navbar navbar-default">
					<div className="container-fluid">
						<div className="navbar-header">
							<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
						        <span className="sr-only">Toggle navigation</span>
						        <span className="icon-bar"></span>
						        <span className="icon-bar"></span>
						        <span className="icon-bar"></span>
					      	</button>
					      	<a className="navbar-brand" href="#">Trans App</a>
						</div>
					</div>
				</nav>
				<div className="col-sm-8" center={center}>
					<MyMap />
				</div>
			</div>
		);
	}
}

export default Container;