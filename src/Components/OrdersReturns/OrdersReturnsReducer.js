const initialstate = {
	order: {}
}

export default function OrdersReducersReducer(state = initialstate, action) {
	const { payload, type } = action;

	switch (type) {
		case 'CREATE_ORDER_FULFILLED':
			return {
				...state,
				order: payload.order
			}
		

		default: {
			return state
		}
	}
}
