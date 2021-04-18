import axios from 'axios'


export const updateUser = ( userId, user, name, email, isAdmin ) => {
    return {
        type: 'UPDATE_USER',
        payload: axios({
            method: 'PUT',
            url: `/api/users/${userId}`,
            headers: {
                "Authorization": `Bearer ${user.token}`,
                "Content-type": "application/json; charset=UTF-8"
            },
            data: {
                name,
                email,
                isAdmin
            }
            
            
        })
            .then(response => {
                console.log('response.data in UPDATE USER: ', response.data)
                return response.data
            })
    }
};


export const getUser = (selectedUser, user) => {
    return {
        type: 'GET_USER',
        payload: axios({
            method: 'get',
            url: `/api/users/${selectedUser}`,
            headers: {
                "Authorization": `Bearer ${user.token}`,
                "Content-type": "application/json; charset=UTF-8"
            },
            data: {
                user: selectedUser
            }
        })
            .then(response => {
                return response.data
            })
    }
};

export const userUpdateReset = () => {
    return {
        type: 'USER_UPDATE_RESET',
    }
};


// export const deleteUser = ( deletedUserId, user ) => {
//     return {
//         type: 'DELETE_USER',
//         payload: axios({
//             method: 'DELETE',
//             url: `/api/users/${deletedUserId}`,
//             headers: {
//                 "Authorization": `Bearer ${user.token}`,
//                 "Content-type": "application/json; charset=UTF-8"
//             }
//         })
//             .then(response => {
//                 console.log('response.data in DELETE ORDER: ', response.data)
//                 return response.data
//             })
//     }
// };