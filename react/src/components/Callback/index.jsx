import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class CallbackForm extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			send: false
		}
	}

	render() {
		return(
			<div className="callbac-wrapper">
				<form action="" method="POST" noValidate autoComplete="off">
					<div className="callbac-wrapper_input">
						<TextField id="standard-basic" label="Standard" />
					</div>
					<div className="callbac-wrapper__button">
						<Button variant="contained">Отправить</Button>
					</div>
				</form>
			</div>
		);
	}
}

export default CallbackForm;