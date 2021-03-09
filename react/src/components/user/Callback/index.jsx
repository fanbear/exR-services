import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { toggleModal } from '../../../store/actions/formAction';
import sendForm from '../../../api/user/sendForm';

import TextField from '@material-ui/core/TextField';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Callback.sass';

class CallbackForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: '+38 ',
			massage: null
		};

		this.changeValue = this.changeValue.bind(this);
		this.sendForm = this.sendForm.bind(this);
	}

	changeValue(e) {
		this.setState(() => {
			return {
				value: e.target.value,
			};
		});
	}

	sendForm(e) {
		e.preventDefault();

		sendForm.post('api/order/form/',{
			number: this.state.value
		}).then((res) => {
			this.setState({massage: res.data.massage});
		}).catch((err) => {
			console.log(err);
		});

		setTimeout(()=> {
			this.setState({ massage: null });
			this.setState({value: '+38 '});
			this.props.modalAction(false);
		}, 2000);
	}

	render() {
		const { toggle, modalAction } = this.props;
		const {value, massage } = this.state;
		
		return(
			<div className={toggle ? 'callback-overlay callback-active' : 'callback-overlay'}>
				<div className="callback-wrapper">
					<button onClick={modalAction} className="callback-wrapper__close flex-center"><FontAwesomeIcon icon={faTimesCircle}/></button>
					<form className="flex-center" noValidate autoComplete="off">
						<p>Заказать звонок</p>
						<span>Оставьте заявку, и наш специалист свяжется с вами, или воспользуйтесь чатом</span>
						<div className="callback-wrapper__input">
							<TextField
								onChange={this.changeValue}
								id="standard-basic" 
								label="Номер телефона"
								value={value}
							/>
						</div>
						<div className="callback-wrapper__button">
							<button onClick={this.sendForm}>Заказать</button>
						</div>
						{ massage 
							? <div className="callback-aler__success">{massage}</div>
							: <div className="callback-info__error">{massage}</div>
						}
						
					</form>
				</div>
			</div>
		);
	}
}
CallbackForm.propTypes = {
	toggle: PropTypes.bool.isRequired,
	modalAction: PropTypes.func.isRequired,
};
const mapStateToProps = (store) => {
	return {
		toggle: store.form.toggle,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		modalAction: () => dispatch(toggleModal(false)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(CallbackForm);