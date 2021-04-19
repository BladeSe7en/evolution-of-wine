import axios from 'axios'

export const createCode = ( name, doesThisExpire, duration, isPercentage, discountValue, expireDate, user ) => {
    return {
        type: 'CREATE_CODE',
        payload: axios({
            method: 'POST',
            url: '/api/discountCode/createCode',
            headers: {
                "Authorization": `Bearer ${user.token}`,
                "Content-type": "application/json; charset=UTF-8"
            },
            data: {
                name,
                doesThisExpire, 
                duration, 
                isPercentage, 
                discountValue, 
                expireDate
            }
        })
            .then(response => {
                console.log('response.data in DELETE ORDER: ', response.data)
                return response.data
            })
    }
};