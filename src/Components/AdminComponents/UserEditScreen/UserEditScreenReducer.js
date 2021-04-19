
const initialstate = {
    userEditSuccess  : false,
    userEditError    : false,
    userEditLoading  : false,

    selectedUser : {
        name: '',
        email: '',
        isAdmin: false
    }

}

const UserEditScreenReducer = (state = initialstate, action) => {
	const { payload, type } = action;
	switch (type) {
        case 'UPDATE_USER_PENDING': {
			return {
				...state,
				userEditLoading: true
			}
		}

        case 'UPDATE_USER_FULFILLED': {
			return {
				...state,
				userEdituccess: true,
                userEditLoading: false,
                userEdit    : payload
			}
		}

		case 'UPDATE_USER_REJECTED': {
			return {
				...state,
				userEditLoading: false,
                userEditError: true
			}
		}

		case 'UPDATE_USER_RESET': {
            return {
                ...state,
                userEditSuccess  : false,
                userEditError    : false,
                userEditsLoading : false,
            }
        }

        case 'GET_USER_PENDING': {
			return {
				...state,
				userEditLoading: true
			}
		}

        case 'GET_USER_FULFILLED': {
            console.log('payload---: ',payload)
			return {
				...state,
				userEdituccess : true,
                userEditLoading: false,
                selectedUser   : payload
			}
		}

		case 'GET_USER_REJECTED': {
			return {
				...state,
				userEditLoading: false,
                userEditError: true
			}
		}

		default: {
			return state
		}
	}
}

export default UserEditScreenReducer



