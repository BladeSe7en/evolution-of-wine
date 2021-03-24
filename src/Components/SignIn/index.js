import { connect } from 'react-redux';
import SignIn from './SignIn';

function mapStoreToProps(store) {
    return {
        user    : store.SignIn.user,
        loading : store.Home  .loading,
        error   : store.Home  .error
        
    };
}

export default connect(mapStoreToProps)(SignIn);


