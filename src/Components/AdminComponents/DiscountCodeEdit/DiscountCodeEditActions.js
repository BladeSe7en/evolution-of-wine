import axios from 'axios'


export const updateCode = ( codeId, name, doesThisExpire, duration, isPercentage, discountValue, expireDate, user ) => {
    return {
        type: 'UPDATE_CODE',
        payload: axios({
            method: 'PUT',
            url: `/api/discountCode/updateCode/${codeId}`,
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
                console.log('response.data in UPDATE CODE: ', response.data)
                return response.data
            })
    }
};


export const getCode = (selectedCode, user) => {
    return {
        type: 'GET_CODE',
        payload: axios({
            method: 'get',
            url: `/api/discountCode/${selectedCode}`,
            headers: {
                "Authorization": `Bearer ${user.token}`,
                "Content-type": "application/json; charset=UTF-8"
            },
            data: {
                code: selectedCode
            }
        })
            .then(response => {
                return response.data
            })
    }
};





export const codeUpdateReset = () => {
    return {
        type: 'CODE_UPDATE_RESET',
    }
};
