import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

class Content extends React.Component {
	render() {
		return(
			<div className="container">
				<Router>
					<div>
						<Route path='/'/>
					</div>
				</Router>
			</div>
		);
	}
}

export default Content;