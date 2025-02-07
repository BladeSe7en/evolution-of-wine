import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveShippingAddress } from '../Cart/CartActions';
import CheckoutSteps from '../CheckoutSteps/CheckoutSteps'
import NavBarMini from '../../NavBarComponents/NavBarMini/NavBarMini';
import SideSearchBar from '../../NavBarComponents/SideSearchBar/SideSearchBar';
import { toggleSideBar } from '../../NavBarComponents/SideSearchBar/SideSearchBarActions';

export default function ShippingAddressScreen(props) {
    const { user } = useSelector(state => state.SignIn);
    const { shippingAddress } = useSelector((state) => state.Cart);
    const [fullName,   setFullName]   = useState(shippingAddress.fullName);
    const [address,    setAddress]    = useState(shippingAddress.address);
    const [city,       setCity]       = useState(shippingAddress.city);
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
    const [country,    setCountry]    = useState(shippingAddress.country);
    const { sideBarOpened } = useSelector((state) => state.SideSearchBar);

    const dispatch = useDispatch();
    
    if (!user._id) {
        props.history.push('/signin');
    }


    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(
            saveShippingAddress({ fullName, address, city, postalCode, country })
        );
        props.history.push('/payment');
    };

    useEffect(() => {
        console.log('testing in home')
        dispatch(toggleSideBar(true))
    }, [])


    return (
        <div>
                        <SideSearchBar />
                    <div className={`${sideBarOpened ? 'sudo-background-white-opened add-margin' : 'sudo-background-white-closed add-margin'}`}>
            <CheckoutSteps step1 step2></CheckoutSteps>
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <h1>Shipping Address</h1>
                </div>
                <div>
                    <label htmlFor="fullName">Full Name</label>
                    <input
                        type="text"
                        id="fullName"
                        placeholder="Enter full name"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        required
                    ></input>
                </div>
                <div>
                    <label htmlFor="address">Address</label>
                    <input
                        type="text"
                        id="address"
                        placeholder="Enter address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                    ></input>
                </div>
                <div>
                    <label htmlFor="city">City</label>
                    <input
                        type="text"
                        id="city"
                        placeholder="Enter city"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        required
                    ></input>
                </div>
                <div>
                    <label htmlFor="postalCode">Postal Code</label>
                    <input
                        type="text"
                        id="postalCode"
                        placeholder="Enter postal code"
                        value={postalCode}
                        onChange={(e) => setPostalCode(e.target.value)}
                        required
                    ></input>
                </div>
                <div>
                    <label htmlFor="country">Country</label>
                    <input
                        type="text"
                        id="country"
                        placeholder="Enter country"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        required
                    ></input>
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