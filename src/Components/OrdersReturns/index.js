import { connect } from 'react-redux';
import OrdersReturns from './OrdersReturns';

function mapStoreToProps(store) {
    return {
        user: store.SignIn.user,
        
    };
}

export default connect(mapStoreToProps)(OrdersReturns);
