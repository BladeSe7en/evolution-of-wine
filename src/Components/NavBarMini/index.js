import { connect } from 'react-redux';
import NavBarMini from './NavBarMini';

function mapStoreToProps(store) {
    return {
        user      : store.SignIn.user,
        cartItems : store.Cart  .cartItems
        
    };
}

export default connect(mapStoreToProps)(NavBarMini);
