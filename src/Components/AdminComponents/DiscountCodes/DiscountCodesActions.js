import axios from 'axios';

export const getAllDiscountCodes = ( user ) => {
    return {
        type: 'GET_ALL_CODES',
        payload: axios({
            method: 'GET',
            url: '/api/discountCode/',
            headers: {
                "Authorization": `Bearer ${user.token}`,
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(response => {
                console.log('response.data in GET_ALL CODES: ', response.data)
                return response.data
            })
    }
};


export const deleteCode = ( code, user ) => {
    console.log('this is code to delete: ',code._id)
    return {
        type: 'DELETE_CODE',
        payload: axios({
            method: 'DELETE',
            url: `/api/discountCode/${code._id}`,
            headers: {
                "Authorization": `Bearer ${user.token}`,
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(response => {
                console.log('response.data in DELETE CODE: ', response.data)
                return response.data
            })
    }
};

export const codeReset = () => {
    return {
        type: 'CODE_RESET',
    };
}

