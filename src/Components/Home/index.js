import { connect } from 'react-redux';
import Home from './Home';

function mapStoreToProps(store) {
    return {
        loading: store.Home.loading,
        products: store.Home.products,
        error: store.Home.error
        
    };
}

export default connect(mapStoreToProps)(Home);