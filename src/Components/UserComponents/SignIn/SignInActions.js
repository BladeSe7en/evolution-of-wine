import axios from 'axios';


export const updateUserProfile = (user, name, email, password ) => {
	console.log('user: ',user)
	console.log('name: ',name)
	console.log('email: ',email)
	console.log('password: ',password)

    return {
        type: 'UPDATE_USER_PROFILE',
        payload: axios({
            method: 'put',
            url: '/api/users/profile',
            headers: {
                "Authorization": `Bearer ${user.token}`,
                "Content-type": "application/json; charset=UTF-8"
            },
            data: {
                user: user._id, 
				name, 
				email, 
				password
            }
        })
            .then(response => {
                return response.data
            })
    }
};


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