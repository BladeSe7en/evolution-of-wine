import axios from 'axios';


export const updateUser = (value) => ({
	type: 'UPDATE_USER',
	payload: value,
})

export const signin = (email, password) => {
	return {
		type: 'USER_SIGNIN', 
        payload: axios.post('/api/users/signin', { email, password })
            .then(response => {
                return (response.data)
            })
    }
};


export const signout = ()  => {
	return {
		type: 'USER_SIGNOUT'
	}
};