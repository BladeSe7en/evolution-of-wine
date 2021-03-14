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
                let product = Object.assign( {}, response.data, { qty: +qty } )
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




