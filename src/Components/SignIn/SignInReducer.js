const initialstate = {
	user: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) :
		{
			_id: null,
			name: null,
			email: null,
			isAdmin: false,
			token: null,
			address: null
		}

}

const SignInReducer = (state = initialstate, action) => {
	const { payload, type } = action;
	switch (type) {
		case 'UPDATE_USER': {
			return {
				...state,
				user: payload
			}
		}
		case 'USER_SIGNIN_PENDING':
			return {
				...state,
				loading: true
			};

		case 'USER_SIGNIN_FULFILLED':
			localStorage.setItem('userInfo', JSON.stringify(payload));
			return {
				...state,
				loading: false,
				user: payload
			};

		case 'USER_SIGNIN_REJECTED':
			console.log('state in signin: ', state)
			return {
				...state,
				loading: false,
				error: payload
			};

		case 'USER_SIGNOUT':
			localStorage.removeItem('userInfo');
			localStorage.removeItem('cartItems');
			return {
				...state,
				user: initialstate.user
			};

		default: {
			return state
		}
	}
}

export default SignInReducer



