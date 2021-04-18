import axios from 'axios';

        export const getProductDetails = (productId) => {
            return {
                type: 'PRODUCT_DETAILS',
                payload: axios.get(`/api/products/${productId}`)
                    .then(response => {
                        console.log('response.data in productDetails: ',response.data)
                        return response.data
                    })
            }
        }