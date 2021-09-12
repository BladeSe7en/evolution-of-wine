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

        export const getImages = () => {
            return {
                type: 'GET_IMAGES',
                payload: axios.get('/api/uploads')
                    .then(response => {
                        return response.data
                    })
            }
        }

        export const getBannerImages = () => {
            return {
                type: 'GET_BANNER_IMAGES',
                payload: axios.get('/api/bannerImg')
                    .then(response => {
                        return response.data
                    })
            }
        }
