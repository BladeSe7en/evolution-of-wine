const initialstate = {
	user: {
        userName: null,
        address: '123 Blue St'
    }
}

export default function OrdersReducersReducer(state = initialstate, action) {
	const { payload, type } = action;

	switch (type) {
		case 'UPDATE_USER': {
			return {
				...state,
				user: payload
			}
		}

		default: {
			return state
		}
	}
}
