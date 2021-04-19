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

export const orderPayReset = () => {
    return {
        type: 'ORDER_PAY_RESET',
    }
};

export const checkDiscountCode = ( code, user ) => {
    return {
        type: 'CHECK_CODE',
        payload: axios({
            method: 'GET',
            url: `/api/discountCode/${code}`,
            headers: {
                "Authorization": `Bearer ${user.token}`,
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(response => {
                console.log('response.data in CHECK CODE: ', response.data)
                return response.data
            })
    }
};

