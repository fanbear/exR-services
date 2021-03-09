import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { toggleModal } from '../../../store/actions/formAction';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMobileAlt} from '@fortawesome/free-solid-svg-icons';

class CallbackButton extends React.Component {
	render(){
		const { modalAction } = this.props;
		return (
			<div className="callback-btn flex-center">
				<button onClick={modalAction} className="btn-callback"><FontAwesomeIcon icon={faMobileAlt} /></button>
			</div>
		);
	}
}

CallbackButton.propTypes = {
	modalAction: PropTypes.func.isRequired,
};
const mapStateToProps = (store) => {
	console.log(store); // посмотрим, что же у нас в store?
	return {
		toggle: store.form.toggle,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		modalAction: () => dispatch(toggleModal(true)), // [1]
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(CallbackButton);