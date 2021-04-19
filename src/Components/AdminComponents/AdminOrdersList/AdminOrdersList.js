import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AdminNav from '../../NavBarComponents/AdminNav/adminNav';
import LoadingBox from '../../UtilityComponents/LoadingBox/LoadingBox';
import MessageBox from '../../UtilityComponents/MessageBox/MessageBox';
import { getAllOrders, deleteOrder, deliverOrder, deleteOrderReset } from './AdminOrdersListActions';

export default function AdminOrdersList(props) {
    const { adminListLoading, adminListError, adminListAllOrders, adminDeleteOrderSuccess, adminDeleteOrderError, AdminDeleteOrderLoading } = useSelector((state) => state.AdminOrdersList);
    const { user } = useSelector((state) => state.SignIn);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(deleteOrderReset())
        dispatch(getAllOrders(user));
    }, [dispatch, adminDeleteOrderSuccess]);
    const deleteHandler = (order) => {
        if (window.confirm('Are you sure you want to delete order?')) {
            dispatch(deleteOrder(order._id, user));
        }
    };

    let pendingOrders = adminListAllOrders.filter((order) => order.isPaid === true);
    let deliveryInProggress = adminListAllOrders.filter((order) => order.isPaid === true && order.isFullfilled === true && order.isDelivered === false);
    let allDeliveredOrders = adminListAllOrders.filter((order) => order.isPaid === true && order.isFullfilled === true && order.isDelivered === true);
    let style = ''
    return (
        <div>
            <AdminNav/>
            <h1 className = 'orders-header'>Orders</h1>
            {adminListLoading ? (
                <LoadingBox></LoadingBox>
            ) : adminListError ? (
                <MessageBox variant="danger">{adminListError}</MessageBox>
            ) : (
                <div >
                    <div className = 'tables-display'>
                    <h1>Pending Orders Waiting For Fullfillment</h1>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>USER</th>
                                <th>DATE</th>
                                <th>TOTAL</th>
                                <th>PAID</th>
                                <th>FULFILLED</th>
                                <th>DELIVERED</th>
                                <th>ACTIONS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {pendingOrders.length === 0 ? (
                                <div className='no-orders'>No Pending Orders</div>
                            ) : pendingOrders.map((order) => (
                                <tr key={order._id}>
                                    <td>{order._id}</td>
                                    <td>{order.shippingAddress.fullName}</td>
                                    <td>{order.createdAt.substring(0, 10)}</td>
                                    <td>{order.totalPrice.toFixed(2)}</td>
                                    <td>{order.isPaid ? order.paidAt.substring(0, 10) : 'No'}</td>
                                    
                                    <td style = {order.isFullfilled ? {backgroundColor: 'green'} : {backgroundColor: 'red'}}>
                                        {order.isFullfilled
                                            ? order.FullfilledAt.substring(0, 10)
                                            : 'No'}
                                    </td>
                                    <td style = {order.isFullfilled ? {backgroundColor: 'green'} : {backgroundColor: 'red'}}>
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
                                        <button
                                            type="button"
                                            className="small"
                                            onClick={() => deleteHandler(order)} >
                                            Delete
                                    </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    </div>

                    <div className = 'tables-display'>
                    <h1>Orders Out For Delivery</h1>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>USER</th>
                                <th>DATE</th>
                                <th>TOTAL</th>
                                <th>PAID</th>
                                <th>FULFILLED</th>
                                <th>DELIVERED</th>
                                <th>ACTIONS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {deliveryInProggress.length === 0 ? (
                                <div className='no-orders'>No Orders Out For delivery</div>
                            ) : deliveryInProggress.map((order) => (
                                <tr key={order._id}>
                                    <td>{order._id}</td>
                                    <td>{order.shippingAddress.fullName}</td>
                                    <td>{order.createdAt.substring(0, 10)}</td>
                                    <td>{order.totalPrice.toFixed(2)}</td>
                                    <td>{order.isPaid ? order.paidAt.substring(0, 10) : 'No'}</td>
                                    <td style = {order.isFullfilled ? {backgroundColor: 'green'} : {backgroundColor: 'red'}}>
                                        {order.isFullfilled
                                            ? order.FullfilledAt.substring(0, 10)
                                            : 'No'}
                                    </td >

                                    <td style = {order.isFullfilled ? {backgroundColor: 'green'} : {backgroundColor: 'red'}}>
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
                                        <button
                                            type="button"
                                            className="small"
                                            onClick={() => deleteHandler(order)} >
                                            Delete
                                    </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    </div>
                    
                    <div className = 'tables-display'>
                    <h1>All delivered Orders</h1>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>USER</th>
                                <th>DATE</th>
                                <th>TOTAL</th>
                                <th>PAID</th>
                                <th>FULFILLED</th>
                                <th>DELIVERED</th>
                                <th>ACTIONS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allDeliveredOrders.length === 0 ? (
                                <div className='no-orders'>No Pending Orders</div>
                            ) : allDeliveredOrders.map((order) => (
                                <tr key={order._id}>
                                    <td>{order._id}</td>
                                    <td>{order.shippingAddress.fullName}</td>
                                    <td>{order.createdAt.substring(0, 10)}</td>
                                    <td>{order.totalPrice.toFixed(2)}</td>
                                    <td>{order.isPaid ? order.paidAt.substring(0, 10) : 'No'}</td>
                                    <td style = {order.isFullfilled ? {backgroundColor: 'green'} : {backgroundColor: 'red'}}>
                                        {order.isFullfilled
                                            ? order.FullfilledAt.substring(0, 10)
                                            : 'No'}
                                    </td>
                                    <td style = {order.isFullfilled ? {backgroundColor: 'green'} : {backgroundColor: 'red'}}>
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
                                        <button
                                            type="button"
                                            className="small"
                                            onClick={() => deleteHandler(order)} >
                                            Delete
                                    </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    </div>
                </div>
            )}
        </div>
    );
}