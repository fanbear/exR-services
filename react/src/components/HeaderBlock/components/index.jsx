import React from 'react';
import { faMapMarkerAlt, faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CallbackForm from '../../Callback'



class Address extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpened: false,
            title: props.addressTitle,
            desc: props.addressDesc
        }
    }
    
    render() {
        return (
            <div className="address-wrapper">
                <div className="address-wrapper__item">
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                    <div className="address-title">{this.state.title}</div>
					<div className="address-desc">{this.state.desc}</div>
                </div>
            </div>
        );
    }
}

class Phone extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpened: false,
            one: props.phoneOne,
            two: props.phoneTwo ,
            three: props.phoneThree,
        }
    }

    render() {
        return (
            <div className="phone-wrapper">
                <div className="phone-wrapper__item">
                    <FontAwesomeIcon icon={faMobileAlt} />
                    <span><a href={this.state.one}>{this.state.one}</a></span>
                </div>
                <div className="phone-wrapper__dropdown">
                    <p><a href={this.state.one}>{this.state.two}</a></p>
                    <p><a href={this.state.one}>{this.state.three}</a></p>
                </div>
            </div>
        );
    }
}

class Time extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpened: false,
            days: props.days,
            hollydays: props.hollydays
        }
    }

    render() {
        return (
            <div className="time-wrapper">
                <div className="time-wrapper__item">{this.state.days}</div>
                <div className="time-wrapper__item">{this.state.hollydays}</div>
            </div>
        );
    }
}

class Callback extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: false
        }
        this.handleClick = this.handleClick.bind(this);
    }

    //handdler button calback click
    handleClick(e) {
        e.preventDefault();

        this.setState( state => ({
            isToggleOn: !state.isToggleOn
        }))
    }

    render() {
        return (
            <div className="callback-bnt">
                <button onClick={this.handleClick}>
                    { this.state.isToggleOn ? <CallbackForm /> : 'Off' }
                </button>
            </div>
        );
    }
}

export { Address, Phone, Time, Callback };