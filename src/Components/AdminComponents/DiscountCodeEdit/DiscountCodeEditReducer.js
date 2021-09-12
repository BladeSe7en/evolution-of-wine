
const initialstate = {
    codeEditLoading: false,
    codeEditSuccess: false,
    codeEditError  : false,
    selectedCode   : ''
    
}

const DiscountCodeEditReducer = (state = initialstate, action) => {
	const { payload, type } = action;
	switch (type) {
        case 'UPDATE_CODE_PENDING': {
			return {
				...state,
				codeEditLoading: true
			}
		}

        case 'UPDATE_CODE_FULFILLED': {
			return {
				...state,
				codeEditSuccess: true,
                codeEditLoading: false,
			}
		}

		case 'UPDATE_CODE_REJECTED': {
			return {
				...state,
				codeEditLoading: false,
                codeEditError: true
			}
		}

        case 'UPDATE_CODE_RESET': {
            return {
                ...state,
                codeEditSuccess : false,
                codeEditError   : false,
                codeEditLoading : false,
            }
        }

        case 'GET_CODE_PENDING': {
			return {
				...state,
				codeEditLoading: true
			}
		}

        case 'GET_CODE_FULFILLED': {
			return {
				...state,
                codeEditLoading: false,
                selectedCode   : payload
			}
		}

		case 'GET_CODE_REJECTED': {
			return {
				...state,
				codeEditLoading: false,
                codeEditError: true
			}
		}

		default: {
			return state
		}
	}
}

export default DiscountCodeEditReducer



