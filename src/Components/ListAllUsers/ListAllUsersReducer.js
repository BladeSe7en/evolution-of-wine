
const initialstate = {
    allUsersSuccess  : false,
    allUsersError    : false,
    allUsersLoading  : false,

    deleteUserSuccess  : false,
    deleteUserError    : false,
    deleteUserLoading  : false,


    allUsers         : []
    
}

const ListAllUsersReducer = (state = initialstate, action) => {
	const { payload, type } = action;
	switch (type) {
        case 'GET_ALL_USERS_PENDING': {
			return {
				...state,
				allUsersLoading: true
			}
		}

        case 'GET_ALL_USERS_FULFILLED': {
			return {
				...state,
				allUsersSuccess: true,
                allUsersLoading: false,
                allUsers    : payload
			}
		}

		case 'GET_ALL_USERS_REJECTED': {
			return {
				...state,
				allUsersLoading: false,
                allUsersError: true
			}
		}

		case 'GET_ALL_USERS_RESET': {
            return {
                ...state,
                allUsersSuccess  : false,
                allUsersError    : false,
                allUsersLoading  : false,
            }
        }

        case 'DELETE_USER_PENDING': {
			return {
				...state,
				deleteUserLoading: true
			}
		}

        case 'DELETE_USER_FULFILLED': {
			return {
				...state,
				deleteUserSuccess: true,
                deleteUserLoading: false,
			}
		}

		case 'DELETE_USER_REJECTED': {
			return {
				...state,
				deleteUserLoading: false,
                deleteUserError: true
			}
		}

		case 'DELETE_USER_RESET': {
            return {
                ...state,
                deleteUserSuccess  : false,
                deleteUserError    : false,
                deleteUserLoading  : false,
            }
        }

		default: {
			return state
		}
	}
}

export default ListAllUsersReducer



