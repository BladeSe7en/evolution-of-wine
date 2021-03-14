
const initialstate = {
    cartItems         : localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [],
    qty               : 0,
    totalItemsOrdered : 0
}

export default function CartReducer(state = initialstate, action) {
    const { payload, type } = action;

    console.log('what is type: ', type)
    console.log('what is payload: ',payload)

    switch (type) {
        case 'ADD_TO_CART_PENDING': {
            return {
                ...state,
                loading: true
            }
        }
        case 'ADD_TO_CART_FULFILLED': {
            console.log('state.cartItems: ', state.cartItems)
            console.log('payload in reducer: ', payload)
            const existItem = state.cartItems.find((x) => x._id === payload._id);
            let cartItems
            existItem ? (cartItems = state.cartItems.map((x) => x._id === existItem._id ? payload : x)) : (cartItems = [...state.cartItems, payload])
            console.log('THIS IS CART ITEMS: ', cartItems)

            localStorage.setItem('cartItems', JSON.stringify(cartItems))

            var total = cartItems.reduce((previousValue, currentValue) => {
                return {
                    qty: previousValue.qty + currentValue.qty,
                }
            });
            console.log(total);


            return {
                ...state,
                cartItems: cartItems,
                qty: payload.qty
            }
        }

        case 'ADD_TO_CART_REJECTED': {
            return {
                ...state,
                loading: false,
                error: payload.message
            }
        }

        case 'UPDATE_TOTAL_CART_ITEMS': {
            return {
                ...state,
                ...payload
            }
        }

        case 'REMOVE_FROM_CART': {
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems.filter((x) => x._id !== payload.productId)));
            return {
                ...state,
            cartItems: state.cartItems.filter((x) => x._id !== payload.productId)
            }
        }


        default: {
            return state
        }

    }
}
