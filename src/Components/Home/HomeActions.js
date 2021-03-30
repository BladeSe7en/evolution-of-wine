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

        export const getOrders = () => {
            console.log('-1-')
            return {
                type: 'GET_ORDERS',
                payload: axios.get('/api/orders/get')
                    .then(response => {
                        console.log('-2-')
                        return response.data
                    })
            }
        }

