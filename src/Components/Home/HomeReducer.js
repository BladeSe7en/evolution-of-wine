const initialstate = {
	loading: false,
	products: [],
	error: '',
	images: [],
	bannerImgs: ['test']
}

const HomeReducer = (state = initialstate, action) => {
	const { payload, type } = action;


	switch (type) {
// triggered from Home Actions ------------------------
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

		case 'GET_IMAGES_PENDING': {
			return {
				...state,
				loading: true
			}
		}

		case 'GET_IMAGES_FULFILLED': {
			return {
				...state,
				loading: false,
				images: payload
			}
		}
		case 'GET_IMAGES_REJECTED': {
			return {
				...state,
				loading: false,
				error: payload.message
			}
		}

// Triggered from Register Screen Actions ------------------------
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

// Triggered from Place Order Screen Action ------------------------
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

// Triggered from Orders Returns Actions ------------------------
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
			return {
				...state,
				loading: false,
				error: payload
			};

		case 'GET_ORDERS_PENDING': {
			return {
				...state,
				loading: true
			};
		}

		case 'GET_ORDERS_FULFILLED': {
			return {
				...state,
				loading: false
			}
		}

		case 'GET_ORDERS_REJECTED':
			return {
				...state,
				loading: false,
				error: payload
			};

// Triggered from Sign In Actions ------------------------
		case 'UPDATE_USER_PROFILE_PENDING': {
			return {
				...state,
				loading: true
			};
		}

		case 'UPDATE_USER_PROFILE_FULFILLED': {
			return {
				...state,
				loading: false
			}
		}

		case 'UPDATE_USER_PROFILE_REJECTED':
			return {
				...state,
				loading: false,
				error: payload
			};

// Triggered from Product List Screen ------------------------
		case 'PRODUCT_LIST_FULFILLED': {
			return {
				...state,
				products: payload
			}
		}

		case 'PRODUCT_DELETE_FULFILLED': {
			let oldProducts = state.products
			let newProducts = oldProducts.filter((product) => product._id !== payload.product._id)
			return {
				...state,
				products: newProducts
			}
		}

// Triggered from Product Edit ------------------------
		case 'UPDATE_PRODUCT_PENDING': {
			return {
				...state,
				loading: true
			}
		}

		case 'UPDATE_PRODUCT_FULFILLED': {
			return {
				...state,
				loading: false,
				products: payload
			}
		}
		case 'UPDATE_PRODUCT_REJECTED': {
			console.log('payload in rejected: ',payload)
			return {
				...state,
				loading: false,
				error: payload.message
			}
		}


		default: {
			return state
		}

	}
}

export default HomeReducer
