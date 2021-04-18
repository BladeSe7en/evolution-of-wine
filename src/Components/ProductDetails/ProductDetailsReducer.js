const initialstate = {
    productInfo : {},
}

export default function ProductDetailsReducer(state = initialstate, action) {
	const { payload, type } = action;

	switch (type) {
        case 'PRODUCT_DETAILS_PENDING': {
			return {
				...state,
				loading: true
			}
        }
        case 'PRODUCT_DETAILS_FULFILLED': {
			return {
				...state,
				loading: false,
                productInfo: payload
			}
        }
        case 'PRODUCT_DETAILS_REJECTED': {
			return {
				...state,
				loading: false,
                error: payload.message
			}
        }

// triggered from Product Edit Action -----------
		case 'PRODUCT_UPDATE_RESET': {
			return {
				...state,
				productInfo: {}
			}
		}
		default: {
			return state
        }
        
	}
}

