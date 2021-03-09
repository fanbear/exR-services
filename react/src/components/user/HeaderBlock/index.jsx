import React from 'react';


import { Address, Phone, Logo, HeaderTitle } from './components';
import CallbackForm from '../Callback';
import Menu from '../Menu';
import Search from '../Search';
import './HeaderBlock.sass';
import CallbackButton from '../Callback/callbackButton';


class HeaderBlock extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isToggle : false
		};

		this.showModal = this.showModal.bind(this);
		
	}

	showModal(e, value) {
		e.preventDefault();
		
		this.setState({
			isToggle: value
		});
	}

	render() {
		return (
			<div className="container-fluid header-line">
				<CallbackForm isToggle={this.state.isToggle} closeModal={this.showModal}/>
				<div className="container relative">
					<div className="heade-wrapper">
						<div className="header-wrapper__item">
							<Logo src=""/>
						</div>
						<div className="header-wrapper__item">
							<Menu />
						</div>
						<div className="header-wrapper__item">
							<HeaderTitle title="МегаМастер" desc="Ремонт цифровой техники"/>
							<Phone 
								one="+38 (099) 661-25-45"
								two="+38 (050) 661-25-45"
								three="+38 (066) 661-25-45"
							/>
							<Address
								addressTitle="asd"
								addressDesc="qwe"
							/>
							<CallbackButton />
						</div>
					</div>
					<div className="search-wrapper">
						<Search />
					</div>
				</div>
			</div>
		);
	}
}

export default HeaderBlock;