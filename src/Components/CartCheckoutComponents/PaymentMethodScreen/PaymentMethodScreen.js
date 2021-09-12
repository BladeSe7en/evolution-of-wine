import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CheckoutSteps from '../CheckoutSteps/CheckoutSteps';
import { savePaymentMethod } from '../Cart/CartActions'
import SideSearchBar from '../../NavBarComponents/SideSearchBar/SideSearchBar';
import { toggleSideBar } from '../../NavBarComponents/SideSearchBar/SideSearchBarActions';
//import NavBarMini from '../NavBarMini/NavBarMini';

export default function PaymentMethodScreen(props) {
    const { shippingAddress } = useSelector((state) => state.Cart);
    const [paymentMethod, setPaymentMethod] = useState('PayPal');
    const { sideBarOpened } = useSelector((state) => state.SideSearchBar);

    if (!shippingAddress.address) {
        props.history.push('/shipping');
    }

    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(savePaymentMethod(paymentMethod));
        props.history.push('/placeorder');
    };

    useEffect(() => {
        console.log('testing in home')
        dispatch(toggleSideBar(true))
    }, [])


    return (
        <div>
                        <SideSearchBar />
                    <div className={`${sideBarOpened ? 'sudo-background-white-opened add-margin' : 'sudo-background-white-closed add-margin'}`}>
            <CheckoutSteps step1 step2 step3></CheckoutSteps>
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <h1>Payment Method</h1>
                </div>
                <div>
                    <div>
                        <input
                            type="radio"
                            id="paypal"
                            value="PayPal"
                            name="paymentMethod"
                            required
                            checked
                            onChange={(e) => setPaymentMethod(e.target.value)}
                        ></input>
                        <label htmlFor="paypal">PayPal</label>
                    </div>
                </div>
                <div>
                    <div>
                        <input
                            type="radio"
                            id="stripe"
                            value="Stripe"
                            name="paymentMethod"
                            required
                            onChange={(e) => setPaymentMethod(e.target.value)}
                        ></input>
                        <label htmlFor="stripe">Stripe</label>
                    </div>
                </div>
                <div>
                    <label />
                    <button className="primary" type="submit">
                        Continue
                    </button>
                </div>
            </form>
        </div>
        </div>
    );
}