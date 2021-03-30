import React from 'react';
import { Link } from 'react-router-dom';

export default function CheckoutSteps(props) {
    return (
        <div className="row checkout-steps">
            <Link to="/" id='home' className='home-icon'>
                <img src={'/images/home-icon-white.png'} className="home-icon" alt="logo" />
            </Link>
            <div className={props.step1 ? 'active' : ''}>Sign-In</div>
            <div className={props.step2 ? 'active' : ''}>Shipping</div>
            <div className={props.step3 ? 'active' : ''}>Payment</div>
            <div className={props.step4 ? 'active' : ''}>Place Order</div>
        </div>
    );
}
