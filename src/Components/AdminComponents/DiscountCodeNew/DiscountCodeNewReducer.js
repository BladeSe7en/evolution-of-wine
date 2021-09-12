
const initialstate = {
    codeNewLoading: false,
    codeNewSuccess: false,
    codeNewError  : false,
    
}

const DiscountCodeNewReducer = (state = initialstate, action) => {
	const { payload, type } = action;
	switch (type) {
        case 'CREATE_CODE_PENDING': {
			return {
				...state,
				codeNewLoading: true
			}
		}

        case 'CREATE_CODE_FULFILLED': {
			return {
				...state,
				codeNewSuccess: true,
                codeNewLoading: false,
			}
		}

		case 'CREATE_CODE_REJECTED': {
			return {
				...state,
				codeNewLoading: false,
                codeNewError: true
			}
		}

        case 'CODE_RESET': {
            return {
                ...state,
                codeNewSuccess : false,
                codeNewError   : false,
                codeNewLoading : false,
            }
        }

		default: {
			return state
		}
	}
}

export default DiscountCodeNewReducer



