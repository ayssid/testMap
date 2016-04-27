import React, {PropTypes, Component} from 'react';
import GoogleMap from 'google-map-react';

class MyMap extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		/*let center = {
			lat: -6.3509288,
			lng: 106.6649545
		};*/

		return (
			<div>
				<GoogleMap
					bootstrapURLKeys={{
						key: 'AIzaSyBTcltMYjACoMcht0Tp9tMgsb-_Cjx30i8',
						language: 'id'
					}} 
					defaultCenter={this.props.center} 
					defaultZoom={16}/>
			</div>
		);
	}
}

export default MyMap;