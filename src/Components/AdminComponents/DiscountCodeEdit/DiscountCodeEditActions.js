import axios from 'axios'


export const updateCode = ( codeId, user, name, duration, discountValue, isPercentage ) => {
    return {
        type: 'UPDATE_CODE',
        payload: axios({
            method: 'PUT',
            url: `/api/discountCode/${codeId}`,
            headers: {
                "Authorization": `Bearer ${user.token}`,
                "Content-type": "application/json; charset=UTF-8"
            },
            data: {
                name,
                duration, 
                discountValue, 
                isPercentage
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
        type: 'GET_USER',
        payload: axios({
            method: 'get',
            url: `/api/users/${selectedCode}`,
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
