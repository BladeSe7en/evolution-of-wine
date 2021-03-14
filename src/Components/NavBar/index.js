import { connect } from 'react-redux';
import NavBar from './NavBar';

function mapStoreToProps(store) {
    return {
        user: store.SignIn.user,
        
    };
}

export default connect(mapStoreToProps)(NavBar);
