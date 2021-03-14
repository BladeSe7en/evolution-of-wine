import { connect } from 'react-redux';
import ProductDetails from './ProductDetails';

function mapStoreToProps(store) {
    return {
        loading: store.Home.loading,
        productInfo: store.ProductDetails.productInfo,
        error: store.Home.error
        
    };
}

export default connect(mapStoreToProps)(ProductDetails);