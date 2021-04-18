import axios from 'axios';


export const userDetails = (user) => {
    return {
        type: 'USER_DETAILS',
        payload: axios({
            method: 'get',
            url: `/api/users/${user._id}`,
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

export const profileReset = () => {
    return {
        type: 'PROFILE_RESET',
    }
}