const initialstate = {

}

export default function SignInReducer(state = initialstate, action) {
	const { payload, type } = action;

	switch (type) {
		case 'UPDATE_USER': {
			return {
				...state,
				user: payload
			}
		};

		case 'USER_REGISTER_PENDING':
			return {
				...state,
				loading: true
			};

		case 'USER_REGISTER_FULFILLED':
			localStorage.setItem('userInfo', JSON.stringify(payload));
			return {
				...state,
				loading: false,
				user: payload
			};

		case 'USER_REGISTER_REJECTED':
			return {
				...state,
				loading: false,
				error: payload
			};


		default: {
			return state
		}
	}
}
