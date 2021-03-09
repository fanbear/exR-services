import React from 'react';
import TextField from '@material-ui/core/TextField';

import './Search.sass';

class Search extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			input: '',
		};
	}

	render() {
		return (
			
			<form action="" method="GET">
				<label htmlFor="standard">
					<TextField id="standard-basic" label="Поиск" />
				</label>
			</form>
		);
	}
}

export default Search;