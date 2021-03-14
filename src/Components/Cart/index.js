import { connect } from 'react-redux';
import Cart from './Cart';

function mapStoreToProps(store) {
    return {
        loading           : store.Home.loading,
        error             : store.Home.error,
        cartItems         : store.Cart.cartItems,
        totalItemsOrdered : store.Cart.totalItemsOrdered
        
    };
}

export default connect(mapStoreToProps)(Cart);