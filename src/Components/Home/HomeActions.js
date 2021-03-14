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