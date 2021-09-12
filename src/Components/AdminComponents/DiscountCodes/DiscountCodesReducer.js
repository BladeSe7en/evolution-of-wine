
const initialstate = {
    allCodesLoading  : false,
    allCodesSuccess  : false,
    allCodesError    : false,
	deleteCodeLoading: false,
    deleteCodeSuccess: false,
    deleteCodeError  : false,
    allCodes         : []
    
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

		case 'DELETE_CODE_PENDING': {
			return {
				...state,
				deleteCodeLoading: true
			}
		}

        case 'DELETE_CODE_FULFILLED': {
			return {
				...state,
				deleteCodeSuccess: true,
                deleteCodeLoading: false,
			}
		}

		case 'DELETE_CODE_REJECTED': {
			return {
				...state,
				allCodesLoading: false,
                allCodesError: true
			}
		}

        case 'CODE_RESET': {
            return {
                ...state,
                allCodesLoading  : false,
				allCodesSuccess  : false,
				allCodesError    : false,
				deleteCodeLoading: false,
				deleteCodeSuccess: false,
				deleteCodeError  : false,
                allCodes         : []
            }
        }

		default: {
			return state
		}
	}
}

export default DiscountCodesReducer



