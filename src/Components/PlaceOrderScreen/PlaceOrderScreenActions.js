import axios from 'axios';

export const createOrder = (order) => {
    return {
        type: 'CREATE_ORDER',
        payload: axios({
            method: 'post',
            url: '/api/orders',
            headers: {
                "Authorization": `Bearer ${order.user.token}`,
                "Content-type": "application/json; charset=UTF-8"
            },
            data: {
                order
            }
        })
            .then(response => {
                return response.data
            })
    }
};



export const orderReset = (order) => {
    return {
        type: 'ORDER_RESET',
        payload: {
            order
        }
    }
};


