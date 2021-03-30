const initialstate = {
    order        : null,
    pendingOrder : null
}

const HomeReducer = (state = initialstate, action) => {
	const { payload, type } = action;

	switch (type) {

		

			case 'CREATE_ORDER_REJECTED':
			return {
				...state,
				error: payload
			};
            
            case 'ORDER_RESET':
			return {
				...state,
				pendingOrder: payload
			};

		default: {
			return state
        }
        
	}
}

export default HomeReducer
