const initialstate = {
//     loading     : false,
//     products    : [],
//     error       : ''
test: ''
}

export default function NavBarMiniReducer(state = initialstate, action) {
	const { payload, type } = action;

	switch (type) {
        case 'TEST_PENDING': {
			return {
				...state,
				loading: true
			}
        }
        case 'TEST_FULFILLED': {
			return {
				...state,
				loading: false,
                products: payload
			}
        }
        case 'TEST_REJECTED': {
			return {
				...state,
				loading: false,
                error: payload.message
			}
        }
		default: {
			return state
        }
        
	}
}
