import axios from 'axios';


export const updateUser = (value) => ({
	type: 'UPDATE_USER',
	payload: value,
})
