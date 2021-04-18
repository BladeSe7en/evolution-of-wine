import { combineReducers }    from 'redux';
import HomeReducer            from './Components/Home/HomeReducer';
import SignInReducer          from './Components/SignIn/SignInReducer';
import ProductDetailsReducer  from './Components/ProductDetails/ProductDetailsReducer';
import CartReducer            from './Components/Cart/CartReducer';
import NavBarMiniReducer      from './Components/NavBarMini/NavBarMiniReducer';
import OrdersReturnsReducer   from './Components/OrdersReturns/OrdersReturnsReducer';
import RegisterScreenReducer  from './Components/RegisterScreen/RegisterScreenReducer';
import UserProfileReducer     from './Components/UserProfile/UserProfileReducer';
import ProductListReducer     from './Components/ProductList/ProductListReducer';
import ProductEditReducer     from './Components/ProductEdit/ProductEditReducer';
import ImageUploaderReducer   from './Components/ImageUploader/ImageUploaderReducer'
import AdminOrdersListReducer from './Components/AdminOrdersList/AdminOrdersListReducer';
import ListAllUsersReducer    from './Components/ListAllUsers/ListAllUsersReducer';
import UserEditScreenReducer  from './Components/UserEditScreen/UserEditScreenReducer';



const rootReducer = combineReducers({
    SignIn         : SignInReducer,
    Home           : HomeReducer,
    ProductDetails : ProductDetailsReducer,
    Cart           : CartReducer,
    NavBarMini     : NavBarMiniReducer,
    OrdersReturns  : OrdersReturnsReducer,
    RegisterScreen : RegisterScreenReducer,
    UserProfile    : UserProfileReducer,
    ProductList    : ProductListReducer,
    ProductEdit    : ProductEditReducer,
    ImageUploader  : ImageUploaderReducer,
    AdminOrdersList: AdminOrdersListReducer,
    ListAllUsers   : ListAllUsersReducer,
    UserEditScreen : UserEditScreenReducer
    
});

export default rootReducer; 
