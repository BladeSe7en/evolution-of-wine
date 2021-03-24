const initialstate = {
    loading     : false,
    products    : [],
    error       : ''
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
		default: {
			return state
        }
        
	}
}

export default HomeReducer
