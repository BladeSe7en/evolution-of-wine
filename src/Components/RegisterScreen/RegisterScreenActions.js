import axios from 'axios';

export const signin = (email, password) => {
	return {
		type: 'USER_SIGNIN', 
        payload: axios.post('/api/users/signin', { email, password })
            .then(response => {
                return response.data
            })
    }

};


export const register = (name, email, password) => {
    return {
        type: 'USER_REGISTER',
        payload: axios.post('/api/users/register', { name, email, password })
        .then( response => {
            return response.data
        })
    }
};
