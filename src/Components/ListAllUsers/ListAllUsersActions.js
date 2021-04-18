import axios from 'axios'


export const listUsers = ( user ) => {
    return {
        type: 'GET_ALL_USERS',
        payload: axios({
            method: 'GET',
            url: '/api/users',
            headers: {
                "Authorization": `Bearer ${user.token}`,
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(response => {
                console.log('response.data in DELETE ORDER: ', response.data)
                return response.data
            })
    }
};


export const deleteUser = ( deletedUserId, user ) => {
    return {
        type: 'DELETE_USER',
        payload: axios({
            method: 'DELETE',
            url: `/api/users/${deletedUserId}`,
            headers: {
                "Authorization": `Bearer ${user.token}`,
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(response => {
                console.log('response.data in DELETE ORDER: ', response.data)
                return response.data
            })
    }
};