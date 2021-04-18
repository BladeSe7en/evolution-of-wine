import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { detailsOrder } from '../Cart/CartActions';
import LoadingBox from '../LoadingBox/LoadingBox';
import MessageBox from '../MessageBox/MessageBox';
import axios from 'axios';
import { PayPalButton } from 'react-paypal-button-v2';
import { payOrder } from '../Cart/CartActions';
//import { orderPayReset } from '../PlaceOrderScreen/PlaceOrderScreenActions';
import NavBarMini from '../NavBarMini/NavBarMini';
import { deliverOrder } from '../AdminOrdersList/AdminOrdersListActions';

export default function OrderScreen(props) {
    const orderId = props.match.params.id;
    const [ sdkReady, setSdkReady ] = useState(false);
    const { loading, error } = useSelector((state) => state.Home);
    const { user } = useSelector((state) => state.SignIn);
    const { order } = useSelector((state) => state.OrdersReturns);
    const { successPay, errorPay, loadingPay } = useSelector((state) => state.Cart);
    const { deliverOrderSuccess,  adminListLoading, adminListError, adminListAllOrders, adminDeleteOrderSuccess, adminDeleteOrderError, AdminDeleteOrderLoadin } = useSelector((state) => state.AdminOrdersList);
    


    const dispatch = useDispatch();

    useEffect(() => {
        const addPayPalScript = async () => {
            const { data } = await axios.get('/api/config/paypal');
            console.log('this is the clientId from paypal: ',data)
            const script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = `https://www.paypal.com/sdk/js?client-id=${data}`;
            script.async = true;
            script.onload = () => {
                setSdkReady(true);
            };
            document.body.appendChild(script);
        };
        if (( order && order._id !== orderId ) || !order || successPay || deliverOrderSuccess ) {
           // dispatch(orderPayReset())
            dispatch(detailsOrder(orderId, user.token));
        } else {
            if (!order.isPaid) {
                if (!window.paypal) {
                    addPayPalScript();
                } else {
                    setSdkReady(true);
                }
            }
        }
    }, [dispatch, successPay, deliverOrderSuccess, user, order, orderId, sdkReady]);


    const successPaymentHandler = (paymentResult) => {
        console.log('on success payment triggered')
        dispatch(payOrder(order, paymentResult, user.token));
    };

    const deliverHandler = () => {
        dispatch(deliverOrder(order._id, user));
    };


    return loading ? (
        <LoadingBox></LoadingBox>
    ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
    ) : (
        <div>
            <NavBarMini />
            <h1 className = 'top'>Order {order._id && order._id}</h1>
            <div className="row top">
                <div className="col-2">
                    <ul>
                        <li>
                            <div className="card card-body">
                                <h2>Shipping</h2>
                                <p>
                                    <strong>Name:</strong> {order._id && order.shippingAddress.fullName} <br />
                                    <strong>Address: </strong> {order._id && order.shippingAddress.address},
                                    {order._id && order.shippingAddress.city},{' '}
                                    {order._id && order.shippingAddress.postalCode},
                                    {order._id && order.shippingAddress.country}
                                </p>
                                {order._id && order.isDelivered ? (
                                    <MessageBox variant="success">
                                        Delivered at {order._id && order.deliveredAt}
                                    </MessageBox>
                                ) : (
                                    <MessageBox variant="danger">Not Delivered</MessageBox>
                                )}
                            </div>
                        </li>
                        <li>
                            <div className="card card-body">
                                <h2>Payment</h2>
                                <p>
                                    <strong>Method:</strong> {order._id && order.paymentMethod}
                                </p>
                                {order._id && order.isPaid ? (
                                    <MessageBox variant="success">
                                        Paid at {order._id && order.paidAt}
                                    </MessageBox>
                                ) : (
                                    <MessageBox variant="danger">Not Paid</MessageBox>
                                )}
                            </div>
                        </li>
                        <li>
                            <div className="card card-body">
                                <h2>Order Items</h2>
                                <ul>
                                    {order._id && order.cartItems.map((item) => (
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
                                    <div>${order._id && order.itemsPrice.toFixed(2)}</div>
                                </div>
                            </li>
                            <li>
                                <div className="row">
                                    <div>Shipping</div>
                                    <div>${order._id && order.shippingPrice.toFixed(2)}</div>
                                </div>
                            </li>
                            <li>
                                <div className="row">
                                    <div>Tax</div>
                                    <div>${order._id && order.taxPrice.toFixed(2)}</div>
                                </div>
                            </li>
                            <li>
                                <div className="row">
                                    <div>
                                        <strong> Order Total</strong>
                                    </div>
                                    <div>
                                        <strong>${order._id && order.totalPrice.toFixed(2)}</strong>
                                    </div>
                                </div>
                            </li>
                            {!order.isPaid && (
                                <li>
                                    {!sdkReady ? (
                                        <LoadingBox></LoadingBox>
                                    ) : (
                                        <>
                                            {errorPay && (
                                                <MessageBox variant="danger">{errorPay}</MessageBox>
                                            )}
                                            {loadingPay && <LoadingBox></LoadingBox>}

                                            <PayPalButton
                                                amount={order.totalPrice}
                                                onSuccess={successPaymentHandler}
                                            ></PayPalButton>
                                        </>
                                    )}
                                </li>
                            )}
                            {user.isAdmin && order.isPaid && !order.isDelivered && (
                                <li>
                                    {adminListLoading && <LoadingBox></LoadingBox>}
                                    {adminListError && (
                                        <MessageBox variant="danger">{adminListError}</MessageBox>
                                    )}
                                    <button
                                        type="button"
                                        className="primary block"
                                        onClick={deliverHandler} >
                                        Deliver Order
                                    </button>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}


