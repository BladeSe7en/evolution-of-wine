
const initialstate = {
    allCodesLoading: false,
    allCodesSuccess: false,
    allCodesError  : false,
    allCodes       : []
    
}

const DiscountCodesReducer = (state = initialstate, action) => {
	const { payload, type } = action;
	switch (type) {
        case 'GET_ALL_CODES_PENDING': {
			return {
				...state,
				allCodesLoading: true
			}
		}

        case 'GET_ALL_CODES_FULFILLED': {
			return {
				...state,
				allCodesSuccess: true,
                allCodesLoading: false,
                allCodes       : payload
			}
		}

		case 'GET_ALL_CODES_REJECTED': {
			return {
				...state,
				allCodesLoading: false,
                allCodesError: true
			}
		}

        case 'GET_ALL_CODES_RESET': {
            return {
                ...state,
                allCodesSuccess : false,
                allCodesError   : false,
                allCodesLoading : false,
            }
        }

		default: {
			return state
		}
	}
}

export default DiscountCodesReducer



