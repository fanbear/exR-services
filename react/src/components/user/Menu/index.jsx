import React from 'react';
import { faBars, faCaretDown, faCaretRight} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Menu.sass';

class Menu extends React.Component {
	constructor(props) {
		super(props);

	}
	render() {
		return (
			<nav className="menu-wrapper">
				<div className="menu-wrapper__nav">
					<span><FontAwesomeIcon icon={faBars} /> Все категории</span>
					<span><FontAwesomeIcon icon={faCaretDown}/></span>
				</div>
				<div className="menu-wrapper__container">
					<ul className="main-menu">
						<li className="main-menu__item">
							<a href="#">
								<span>Ремонт телефонов</span>
								<span><FontAwesomeIcon icon={faCaretRight} /></span>
							</a>
						</li>
						<li className="main-menu__item">
							<a href="#">
								<span>Ремонт планшетов</span>
								<span><FontAwesomeIcon icon={faCaretRight} /></span>
							</a>
						</li>
						<li className="main-menu__item">
							<a href="#">
								<span>Ремонт ноутбуков</span>
								<span><FontAwesomeIcon icon={faCaretRight} /></span>
							</a>
						</li>
						<li className="main-menu__item">
							<a href="#">
								<span>Ремонт комрьютеров</span>
								<span><FontAwesomeIcon icon={faCaretRight} /></span>
							</a>
						</li>
						<li className="main-menu__item">
							<a href="#">
								<span>Ремонт телевизоров</span>
								<span><FontAwesomeIcon icon={faCaretRight} /></span>
							</a>
						</li>
						<li className="main-menu__item">
							<a href="#">
								<span>Акции</span>
								<span><FontAwesomeIcon icon={faCaretRight} /></span>
							</a>
						</li>
						<li className="main-menu__item">
							<a href="#">
								<span>Скидки</span>
								<span><FontAwesomeIcon icon={faCaretRight} /></span>
							</a>
						</li>
						<li className="main-menu__item">
							<a href="#">
								<span>Блог</span>
								<span><FontAwesomeIcon icon={faCaretRight} /></span>
							</a>
						</li>
						<li className="main-menu__item">
							<a href="#">
								<span>Контакты</span>
								<span><FontAwesomeIcon icon={faCaretRight} /></span>
							</a>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}

export default Menu;