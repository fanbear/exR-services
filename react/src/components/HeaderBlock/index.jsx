import React from 'react';
import { Address, Phone, Time, Callback } from './components';
import './HeaderBlock.scss';


const HeaderBlock = (props) => {
	return (
		<div className="header">
			<div className="heade-wrapper">
				<div className="heade-wrapper__item">
					<img src="/logo.png" alt="МегаМастер"/>
				</div>
				<div className="heade-wrapper__item">
					<Time 
						days="Пн-Пт: 10:00 - 20:00"
						hollydays="Сб-Вс: 11:00 - 18:00"
					/>
				</div>
				<div className="heade-wrapper__item">
					<Address
						addressTitle="asd"
						addressDesc="qwe"
					/>
				</div>
				<div className="heade-wrapper__item">
					<Phone 
						phoneOne="+38 (099) 661-25-45"
						phoneTwo="+38 (050) 661-25-45"
						phoneThree="+38 (066) 661-25-45"
					/>
				</div>
				<div className="heade-wrapper__item">
					<Callback />
				</div>
			</div>
		</div>
	);
}

export default HeaderBlock;