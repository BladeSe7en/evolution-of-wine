import axios from 'axios';

export const updateProduct = (product, user) => {
    console.log('in payOrder action-- product: ',product)
    console.log('in payOrder action-- product.image: ',product.image)
    let image = product.image.data

    console.log('in payOrder action-- image: ',image)


    console.log('in payOrder action-- user: ',user)
    return {
        type: 'UPDATE_PRODUCT',
        payload: axios({
            method: 'put',
            url: `/api/products/${product._id}`,
            headers: {
                "Authorization": `Bearer ${user.token}`,
                "Content-type": "application/json; charset=UTF-8"
            },
            data: {
                product
            }
            // method: 'post',
            // url: `/api/uploads`,
            // headers: {
            //     "Authorization": `Bearer ${user.token}`,
            //     "Content-type": "application/json; charset=UTF-8"
            // },
            // data: {
            //     image
            // }
        })
            .then(response => {
                console.log('response.data in update_product: ',response.data)
                return response.data
            })
    }
};


export const productUpdateReset = () => {
    return {
        type: 'PRODUCT_UPDATE_RESET',
    }
}


export const imageUploader = (bodyFormData, user) => {
    console.log('in payOrder action-- bodyFormData: ',bodyFormData)
    return {
        type: 'PRODUCT_UPDATE',
        payload: axios({
            method: 'post',
            url: `/api/uploads`,
            headers: {
                "Authorization": `Bearer ${user.token}`,
                'Content-Type': 'multipart/form-data',
            },
            data: {
                bodyFormData
            }
        })
            .then(response => {
                console.log('response.data in imageUploader: ',response.data)
                return response.data
            })
    }
};

// export const updateImage = (data) => {
//     console.log('this is data in updateImage: ',data)
//     return {
//         type: 'UPDATE_IMAGE',
//         payload: {
//             data
//         }
//     }
// };

// const { data } = await Axios.post('/api/uploads', bodyFormData, {
//     headers: {
//       'Content-Type': 'multipart/form-data',
//       Authorization: `Bearer ${userInfo.token}`,
//     },


    export const updateImage = (file, user) => {
        console.log('in updateImage action-- file: ',file)
        return {
            type: 'UPDATE_IMAGE',
            payload: axios({
                method: 'post',
                url: `/api/uploads`,
                headers: {
                    "Authorization": `Bearer ${user.token}`,
                    'Content-Type': 'multipart/form-data',
                },
                    data: {
                        file
                    }
                
            })
                .then(response => {
                    console.log('response.data in imageUploader: ',response.data)
                    return response.data
                })
        }
    };