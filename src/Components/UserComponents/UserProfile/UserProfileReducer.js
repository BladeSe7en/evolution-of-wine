const initialstate = {
    updateSuccess : false,
    updateError   : false,
    updateLoading : false,
    
}

const UserProfileReducer = (state = initialstate, action) => {
	const { payload, type } = action;
	switch (type) {
        case 'UPDATE_USER_PROFILE_PENDING': {
			return {
				...state,
				updateLoading: true,
                test: payload
			}
		}

        case 'UPDATE_USER_PROFILE_FULFILLED': {
			return {
				...state,
				updateSuccess: true,
                updateLoading: false
			}
		}

		case 'UPDATE_USER_PROFILE_REJECTED': {
			return {
				...state,
				updateLoading: false,
                updateError: true
			}
		}

        case 'PROFILE_REST': {
            return {
                ...state,
                updateSuccess : false,
                updateError   : false,
                updateLoading : false,
            }
        }
	

		default: {
			return state
		}
	}
}

export default UserProfileReducer



