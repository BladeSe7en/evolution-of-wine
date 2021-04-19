import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CheckoutSteps from '../CheckoutSteps/CheckoutSteps'
import LoadingBox from '../../UtilityComponents/LoadingBox/LoadingBox';
import MessageBox from '../../UtilityComponents/MessageBox/MessageBox';
//import NavBarMini from '../NavBarMini/NavBarMini';
import { createOrder, checkDiscountCode } from './PlaceOrderScreenActions';

export default function PlaceOrderScreen(props) {
    const { paymentMethod, cartItems, shippingAddress, success } = useSelector((state) => state.Cart);
    const { loading, error } = useSelector((state) => state.Home);
    const { fullName, address, city, postalCode, country } = shippingAddress;
    const { order } = useSelector((state) => state.OrdersReturns);
    const user = useSelector((state) => state.SignIn);
    const { discountUsed, isPercentage, discountAmount, discountLoading, discountSeccess, discountError } = useSelector((state) => state.PlaceOrderScreen);
    const [ discountCode, setDiscountCode ] = useState('')

    if (!paymentMethod) {
        props.history.push('/payment');
    }
    const toPrice = (num) => Number(num.toFixed(2)); // 5.123 => "5.12" => 5.12
    let itemsPrice = toPrice(
        cartItems.reduce((next, current) => next + current.qty * current.price, 0)
    );

    let shippingPrice = itemsPrice > 100 ? toPrice(0) : toPrice(10);
    let taxPrice = toPrice(0.15 * itemsPrice);
    let subTotal = itemsPrice + shippingPrice + taxPrice;
    let totalPrice = isPercentage ? subTotal * ( discountAmount / 100 ) : subTotal - discountAmount
    let discountValueString = isPercentage ?  discountAmount +'%' : discountAmount.toFixed(2)

    const dispatch = useDispatch();
console.log('what is cartItems before the action: ',cartItems)
console.log('itemsPrice jsx: ',itemsPrice)
let newOrder = {
    paymentMethod, 
    cartItems, 
    shippingAddress,
    user: user.user,
    itemsPrice,
    shippingPrice,
    taxPrice,
    totalPrice,
    discountUsed,
    isPercentage,
    discountCode,
    discountAmount
}
    const placeOrderHandler = () => {
        console.log('this is order in jsx: ',newOrder.user.token)
        dispatch(createOrder( newOrder ));

    };

    const findDiscount = (code) => {
        dispatch(checkDiscountCode( code, user ));

    };

    useEffect(() => {
        if (success) {
            console.log('this is order._id in useeffect: ',order._id)
            props.history.push(`/order/${order._id}`)
        }
    }, [dispatch, props.history, order, success])

    return (
        <div>
            <CheckoutSteps step1 step2 step3 step4></CheckoutSteps>
            <div className="row top">
                <div className="col-2">
                    <ul>
                        <li>
                            <div className="card card-body">
                                <h2>Shipping</h2>
                                <p>
                                    <strong>Name:</strong> {fullName} <br />
                                    <strong>Address: </strong> {address}
                                    {' ' + city},  {' ' + country} {' ' + postalCode}
                                    
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className="card card-body">
                                <h2>Payment</h2>
                                <p>
                                    <strong>Method:</strong> {paymentMethod}
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className="card card-body">
                                <h2>Order Items</h2>
                                <ul>
                                    {cartItems.map((item) => (
                                        <li key={item.product}>
                                            <div className="row">
                                                <div>
                                                    <img
                                                        src={item.image[0]}
                                                        alt={item.name}
                                                        className="small"
                                                    ></img>
                                                </div>
                                                <div className="min-30">
                                                    <Link to={`/product/${item.product}`}>
                                                        {item.name}
                                                    </Link>
                                                </div>

                                                <div>
                                                    {item.qty} x ${item.price} = ${item.qty * item.price}
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="col-1">
                    <div className="card card-body">
                        <ul>
                            <li>
                                <h2>Order Summary</h2>
                            </li>
                            <li>
                                <div className="row">
                                    <div>Items</div>
                                    <div>${itemsPrice.toFixed(2)}</div>
                                </div>
                            </li>
                            <li>
                                <div className="row">
                                    <div>Shipping</div>
                                    <div>${shippingPrice.toFixed(2)}</div>
                                </div>
                            </li>
                            <li>
                                <div className="row">
                                    <div>Tax</div>
                                    <div>${taxPrice.toFixed(2)}</div>
                                </div>
                            </li>
                            <li>
                                <div className="row">
                                    <input
                                        id="discountCode"
                                        type="text"
                                        placeholder="Enter Discount Code"
                                        value={discountCode}
                                        onChange={(e) => setDiscountCode(e.target.value)} >
                                    </input>
                                    <div>
                                        <button className='nav-btn' onClick={() => findDiscount(discountCode)}> <img className='search-icon' alt='icon' src={'/images/white-seach-icon.png'} /> </button>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="row">
                                    <div>
                                        <div> Discount Value </div>
                                    </div>
                                    <div>
                                        <div>{discountValueString}</div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="row">
                                    <div>
                                        <strong> Order Total</strong>
                                    </div>
                                    <div>
                                        <strong>${totalPrice.toFixed(2)}</strong>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <button
                                    type="button"
                                    onClick={placeOrderHandler}
                                    className="primary block"
                                    disabled={cartItems.length === 0}>
                                    Place Order
                                </button>
                                {loading && <LoadingBox></LoadingBox>}
                                {error && <MessageBox variant="danger">{error}</MessageBox>}
                                {discountLoading && <LoadingBox></LoadingBox>}
                                {discountError && <MessageBox variant="danger">{discountError}</MessageBox>}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}