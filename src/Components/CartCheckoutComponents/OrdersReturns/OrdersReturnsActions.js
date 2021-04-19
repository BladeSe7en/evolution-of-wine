import axios from 'axios';


// export const getOrders = (id) => {
// 	console.log('-1-')
// 	return {
// 		type: 'GET_ORDERS',
// 		payload: axios.get('/api/orders/get')
// 			.then(response => {
// 				console.log('-2-')
// 				return response.data
// 			})
// 	}
// }

export const getOrders = (user) => {
    return {
        type: 'GET_ORDERS',
        payload: axios({
            method: 'get',
            url: '/api/orders/getUserOrders',
            headers: {
                "Authorization": `Bearer ${user.token}`,
                "Content-type": "application/json; charset=UTF-8"
            },
            data: {
                user: user._id
            }
        })
            .then(response => {
                return response.data
            })
    }
};