
const initialstate = {
    adminListOrdersSuccess  : false,
    adminListOrdersError    : false,
    AdminListOrdersLoading  : false,

    adminDeleteOrderSuccess : false,
    adminDeleteOrderError   : false,
    AdminDeleteOrderLoading : false,

    deliverOrderSuccess     : false,
    deliverOrderError       : false,
    deliverOrderLoading     : false,
    adminListAllOrders      : []
    
}

const AdminOrdersListReducer = (state = initialstate, action) => {
	const { payload, type } = action;
	switch (type) {
        case 'GET_ALL_ORDERS_PENDING': {
			return {
				...state,
				AdminListOrdersLoading: true
			}
		}

        case 'GET_ALL_ORDERS_FULFILLED': {
			return {
				...state,
				adminListOrdersSuccess: true,
                AdminListOrdersLoading: false,
                adminListAllOrders    : payload
			}
		}

		case 'GET_ALL_ORDERS_REJECTED': {
			return {
				...state,
				AdminListOrdersLoading: false,
                adminListOrdersError: true
			}
		}

        case 'DELETE_ORDER_PENDING': {
			return {
				...state,
				adminDeleteOrderLoading: true
			}
		}

        case 'DELETE_ORDER_FULFILLED': {
			return {
				...state,
				adminDeleteOrderSuccess: true,
                adminDeleteOrderLoading: false,
			}
		}

		case 'DELETE_ORDER_REJECTED': {
			return {
				...state,
				adminDeleteOrderLoading: false,
                adminDeleteOrderError: true
			}
		}

		case 'DELETE_ORDER_RESET': {
            return {
                ...state,
                adminDeleteOrderSuccess : false,
                adminDeleteOrderError   : false,
                adminDeleteOrderLoading : false,
            }
        }

        case 'DELIVER_ORDER_PENDING': {
			return {
				...state,
				deliverOrderLoading: true
			}
		}

        case 'DELIVER_ORDER_FULFILLED': {
			return {
				...state,
				deliverOrderSuccess: true,
                deliverOrderLoading: false,
			}
		}

		case 'DELIVER_ORDER_REJECTED': {
			return {
				...state,
				deliverOrderLoading: false,
                deliverOrderError: true
			}
		}


		default: {
			return state
		}
	}
}

export default AdminOrdersListReducer



