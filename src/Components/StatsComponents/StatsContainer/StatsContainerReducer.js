
const initialstate = {
    salesDataLoading: false,
    salesDataSuccess: false,
    salesDataError: false,
    updatedSalesData: []
}

const StatsContainerReducer = (state = initialstate, action) => {
    const { payload, type } = action;
    switch (type) {
        case 'ADD_NEW_SALES_DATA_PENDING': {
            return {
                ...state,
                salesNewLoading: true
            }
        }

        case 'ADD_NEW_SALES_DATA_FULFILLED': {
            return {
                ...state,
                salesNewSuccess: true,
                salesDataLoading: false,
                updatedSalesData: payload
            }
        }

        case 'ADD_NEW_SALES_DATA_REJECTED': {
            return {
                ...state,
                salesNewLoading: false,
                salesDataError: true
            }
        }

        case 'NEW_SALES_DATA_RESET': {
            return {
                ...state,
                salesDataSuccess: false,
                salesDataError: false,
                salesDataLoading: false,
            }
        }

        default: {
            return state
        }
    }
}

export default StatsContainerReducer



