import axios from 'axios';

export const listProducts = () => {
    return {
        type: 'LIST_PRODUCTS',
        payload: axios.get('/api/products')
            .then(response => {
                return response.data
            })
    }
}

export const addToCart = (productId, qty) => {
    return {
        type: 'ADD_TO_CART',
        payload: axios.get(`/api/products/${productId}`)
            .then(response => {
                let product = Object.assign({}, response.data, { qty: +qty })
                return product
            })
    }
}

export const updateTotalCartItems = (total) => {
    return {
        type: 'UPDATE_TOTAL_CART_ITEMS',
        payload: {
            totalItemsOrdered: total
        }
    }
}

export const removeFromCart = (productId) => {
    return {
        type: 'REMOVE_FROM_CART',
        payload: {
            productId
        }
    }
}

export const saveShippingAddress = (data) => {
    return {
        type: 'CART_SAVE_SHIPPING_ADDRESS',
        payload: {
            shippingAddress: data
        }
    }
};

export const savePaymentMethod = (data) => {
    return {
        type: 'CART_SAVE_PAYMENT_METHOD',
        payload: {
            paymentMethod: data
        }
    }
};

export const detailsOrder = (orderId, token) => {
    return {
        type: 'CREATE_ORDER',
        payload: axios({
            method: 'get',
            url: `/api/orders/${orderId}`,
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(response => {
                console.log('this is response.data inside detailsOrder action: ', response.data)
                return response.data
            })
    }
};
