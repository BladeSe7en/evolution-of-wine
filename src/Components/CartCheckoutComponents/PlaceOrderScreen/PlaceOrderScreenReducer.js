
const initialstate = {
    discountUsed   : false,
    isPercentage   : false,
	discountAmount : 0,
    discountLoading: false,
    discountSuccess: false,
    discountError  : false
    
}

const PlaceOrderScreenReducer = (state = initialstate, action) => {
	const { payload, type } = action;
	switch (type) {
        case 'GET_DISCOUNT_PENDING': {
			return {
				...state,
				discountLoading: true
			}
		}

        case 'GET_DISCOUNT_FULFILLED': {
			return {
				...state,
				discountSuccess: true,
                discountLoading: false
			}
		}

		case 'GET_DISCOUNT_REJECTED': {
			return {
				...state,
				discountLoading: false,
                discountError: true
			}
		}

        case 'PRODUCT_discount_RESET': {
            return {
                ...state,
                discountSuccess : false,
                discountError   : false,
                discountLoading : false,
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


		default: {
			return state
		}
	}
}

export default PlaceOrderScreenReducer



