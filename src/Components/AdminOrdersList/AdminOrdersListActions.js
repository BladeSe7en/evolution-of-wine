import axios from 'axios';


export const getAllOrders = (user) => {
    return {
        type: 'GET_ALL_ORDERS',
        payload: axios({
            method: 'GET',
            url: '/api/orders/all',
            headers: {
                "Authorization": `Bearer ${user.token}`,
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(response => {
                console.log('response.data in update_product: ', response.data)
                return response.data
            })
    }
};


export const deleteOrder = (orderId, user) => {
    return {
        type: 'DELETE_ORDER',
        payload: axios({
            method: 'DELETE',
            url: `/api/orders/${orderId}`,
            headers: {
                "Authorization": `Bearer ${user.token}`,
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(response => {
                console.log('response.data in DELETE ORDER: ', response.data)
                return response.data
            })
    }
};


export const deleteOrderReset = () => {
    return {
        type: 'DELETE_ORDER_RESET',
    }
};


export const deliverOrder = (orderId, user) => {
    return {
        type: 'DELIVER_ORDER',
        payload: axios({
            method: 'PUT',
            url: `/api/orders/${orderId}/deliver`,
            headers: {
                "Authorization": `Bearer ${user.token}`,
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(response => {
                console.log('response.data in DELETE ORDER: ', response.data)
                return response.data
            })
    }
};