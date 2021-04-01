const initialstate = {
    loading     : false,
    products    : [],
    error       : '',
	orders      : []
}

const HomeReducer = (state = initialstate, action) => {
	const { payload, type } = action;

	switch (type) {
        case 'LIST_PRODUCTS_PENDING': {
			return {
				...state,
				loading: true
			}
        }
        case 'LIST_PRODUCTS_FULFILLED': {
			return {
				...state,
				loading: false,
                products: payload
			}
        }
        case 'LIST_PRODUCTS_REJECTED': {
			return {
				...state,
				loading: false,
                error: payload.message
			}
        }

		case 'USER_SIGNIN_PENDING':
			return {
				...state,
				loading: true
			};

			case 'USER_SIGNIN_FULFILLED':
			return {
				...state,
				loading: false
			};

			case 'USER_SIGNIN_REJECTED':
			console.log('state in signin: ', state)
			return {
				...state,
				loading: false,
				error: payload
			};

			case 'CREATE_ORDER_PENDING':
			return {
				...state,
				loading: true
			};

			case 'CREATE_ORDER_FULFILLED':
			return {
				...state,
				loading: false
			};

			case 'GET_ORDERS_FULFILLED': {
				return {
					...state,
					
					orders: payload
				}
			}

			case 'ORDER_DETAILS_PENDING':
			return {
				...state,
				loading: true
			};

			case 'ORDER_DETAILS_FULFILLED':
			return {
				...state,
				loading: false
			};

			case 'ORDER_DETAILS_REJECTED':
			console.log('state in signin: ', state)
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

export default HomeReducer
