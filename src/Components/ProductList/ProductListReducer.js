
const initialstate = {
    createSuccess : false,
    createError   : false,
    createLoading : false,
	createdProduct: {},
	deleteSuccess : false,
	deleteLoading : false,
	deleteError   : false
    
}

const ProductListReducer = (state = initialstate, action) => {
	const { payload, type } = action;
	switch (type) {
        case 'PRODUCT_LIST_PENDING': {
			return {
				...state,
				createLoading: true
			}
		}

        case 'PRODUCT_LIST_FULFILLED': {
			return {
				...state,
				createSuccess: true,
                createLoading: false
			}
		}

		case 'PRODUCT_LIST_REJECTED': {
			return {
				...state,
				createLoading: false,
                createError: true
			}
		}

		case 'PRODUCT_CREATE_PENDING': {
			return {
				...state,
				createLoading: true
			}
		}

        case 'PRODUCT_CREATE_FULFILLED': {
			return {
				...state,
				createSuccess : true,
                createLoading : false,
				createdProduct: payload
			}
		}

		case 'PRODUCT_CREATE_REJECTED': {
			return {
				...state,
				createLoading: false,
                createError: true
			}
		}

        case 'PRODUCT_CREATE_RESET': {
            return {
                ...state,
                createSuccess : false,
                createError   : false,
                createLoading : false,
            }
        }

		case 'PRODUCT_DELETE_RESET': {
            return {
                ...state,
                deleteSuccess : false,
                deleteError   : false,
                deleteLoading : false,
            }
        }

		case 'PRODUCT_DELETE_PENDING': {
			return {
				...state,
				deleteLoading: true
			}
		}

        case 'PRODUCT_DELETE_FULFILLED': {
			return {
				...state,
				deleteSuccess : true,
                deleteLoading : false,
			}
		}

		case 'PRODUCT_DELETE_REJECTED': {
			return {
				...state,
				deleteLoading: false,
                createError: true
			}
		}


		default: {
			return state
		}
	}
}

export default ProductListReducer



