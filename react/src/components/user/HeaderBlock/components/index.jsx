import React from 'react';

import { faCaretDown, faPhoneAlt} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAndroid, faMediumM } from '@fortawesome/free-brands-svg-icons';


// eslint-disable-next-line react/prop-types
function Logo({src}) {

	return (
		<div className="logotype-wrapper flex-center">
			<div className="logotype flex-center">
				{ src 
					? <img src={src} alt="logotype"/> 
					: <FontAwesomeIcon icon={faAndroid} />
				}
			</div>
		</div>

	);
}

// eslint-disable-next-line react/prop-types
function HeaderTitle({title, desc}) {
	return (
		<div className="header-title">
			<p>{title}</p>
			<p>{desc}</p>
		</div>
	);
}

function Address() {
	return (
		<div className="address-wrapper">
			<div className="item-address">
				<div className="address-title">
					<span><FontAwesomeIcon icon={faMediumM} /></span>
					<p>ХАРЬКОВСКИЙ, ул. Анны Ахматовой 7/15</p>
				</div>
				<div className="address-title">
					<span><FontAwesomeIcon icon={faMediumM} /></span>
					<p>ПОЗНЯКИ, ул. Анны Ахматовой 7/15</p>
				</div>
			</div>
		</div>
	);
}

// eslint-disable-next-line react/prop-types
function Phone({one, two, three}) {
	return (
		<div className="phone-wrapper flex-center">
			<div className="phone-wrapper__item">
				<div className="phone-wrapper__title flex-center">
					<span><FontAwesomeIcon icon={faPhoneAlt}/></span>
					<span>
						<a href={one}>{one}</a>
						<p>Пн-Пт: 10:00 - 20:00</p>
					</span>
					<div className="phone-wrapper__arrow"><FontAwesomeIcon icon={faCaretDown}/></div>
				</div>
				<div className="phone-wrapper__dropdown flex-center">
					<span><FontAwesomeIcon icon={faPhoneAlt}/></span>
					<span>
						<a href={one}>{two}</a>
						<a href={one}>{three}</a>
						<p>Сб-Вс: 11:00 - 18:00</p>
					</span>
				</div>
			</div>
		</div>
	);
}

// eslint-disable-next-line react/prop-types


export { Address, Phone, Logo, HeaderTitle };