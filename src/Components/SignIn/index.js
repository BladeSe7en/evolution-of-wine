import { connect } from 'react-redux';
import SignIn from './SignIn';

function mapStoreToProps(store) {
    return {
        user: store.SignIn.user,
        
    };
}

export default connect(mapStoreToProps)(SignIn);
