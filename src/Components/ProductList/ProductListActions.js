import axios from 'axios';


export const createProduct = (user, image, name, category, price, countInStock, brand, rating, numReviews, description) => {
    console.log('user: ', user)
    console.log('image: ', image)
    console.log('name: ', name)
    console.log('category: ', category)
    console.log('price: ', price)
    console.log('countInStock: ', countInStock)
    console.log('brand: ', brand)
    console.log('rating: ', rating)
    console.log('numReviews: ', numReviews)
    console.log('description: ', description)


    return {
        type: 'PRODUCT_CREATE',
        payload: axios({
            method: 'post',
            url: '/api/products',
            headers: {
                "Authorization": `Bearer ${user.token}`,
                "Content-type": "application/json; charset=UTF-8"
            },
            data: {
                user: user._id,
                image,
                name,
                category,
                price,
                countInStock,
                brand,
                rating,
                numReviews,
                description
            }
        })
            .then(response => {
                return response.data
            })
    }
};



export const productDelete = (user, productId) => {
    console.log('user: ', user)
    console.log('productId: ', productId)

    return {
        type: 'PRODUCT_DELETE',
        payload: axios({
            method: 'delete',
            url: `/api/products/${productId}`,
            headers: {
                "Authorization": `Bearer ${user.token}`,
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(response => {
                return response.data
            })
    }
};


export const productCreateReset = () => {
    return {
        type: 'PRODUCT_CREATE_RESET'
    }
}


export const productDeleteReset = () => {
    return {
        type: 'PRODUCT_DELETE_RESET'
    }
}
