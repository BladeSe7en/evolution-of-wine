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

			case 'ORDER_PAY_RESET':
                return {
                    ...state,
					order: {}
                };

				case 'ORDER_DETAILS_FULFILLED':
			return {
				...state,
				order: payload
			};

			case 'PAY_ORDER_FULFILLED': {
				return {
					...state,
					order: payload.order
				}
			}
		

		default: {
			return state
		}
	}
}
