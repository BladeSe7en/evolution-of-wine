import React, { useEffect } from 'react';
import LoadingBox from '../LoadingBox/LoadingBox';
import MessageBox from '../MessageBox/MessageBox';
import { useDispatch, useSelector } from 'react-redux'
import { getOrders } from './OrdersReturnsActions';
import NavBarMini from '../NavBarMini/NavBarMini';


const OrdersReturns = (props) => {
    const { loading, error } = useSelector((state) => state.Home);
    const { myOrders } = useSelector((state) => state.OrdersReturns);
    const { user } = useSelector((state) => state.SignIn);


    const dispatch = useDispatch()

    useEffect(() => {
        console.log('getting my Orders useEffect')
        dispatch(getOrders(user));
    }, [dispatch, user]);


    useEffect(() => {
        console.log('this is myOrders: ', myOrders)
    }, [myOrders]);


    return (
        <div >
            <NavBarMini />
            <h1>Order History</h1>
            {loading ? (
                <LoadingBox></LoadingBox>
            ) : error ? (
                <MessageBox variant="danger">{error}</MessageBox>
            ) : (
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>DATE</th>
                            <th>TOTAL</th>
                            <th>PAID</th>
                            <th>DELIVERED</th>
                            <th>ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody>
                        { myOrders && myOrders.map((order) => (
                            <tr key={order._id}>
                                <td>{order._id}</td>
                                <td>{order.createdAt.substring(0, 10)}</td>
                                <td>{order.totalPrice.toFixed(2)}</td>
                                <td>{order.isPaid ? order.paidAt.substring(0, 10) : 'No'}</td>
                                <td>
                                    {order.isDelivered
                                        ? order.deliveredAt.substring(0, 10)
                                        : 'No'}
                                </td>
                                <td>
                                    <button
                                        type="button"
                                        className="small"
                                        onClick={() => {
                                            props.history.push(`/order/${order._id}`);
                                        }} >
                                        Details
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default OrdersReturns;
