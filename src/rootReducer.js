import { combineReducers }     from 'redux';
import HomeReducer             from './Components/Home/HomeReducer';
import SignInReducer           from './Components/UserComponents/SignIn/SignInReducer';
import ProductDetailsReducer   from './Components/ProductComponents/ProductDetails/ProductDetailsReducer';
import CartReducer             from './Components/CartCheckoutComponents/Cart/CartReducer';
import NavBarMiniReducer       from './Components/NavBarComponents/NavBarMini/NavBarMiniReducer';
import OrdersReturnsReducer    from './Components/CartCheckoutComponents/OrdersReturns/OrdersReturnsReducer';
import RegisterScreenReducer   from './Components/UserComponents/RegisterScreen/RegisterScreenReducer';
import UserProfileReducer      from './Components/UserComponents/UserProfile/UserProfileReducer';
import ProductListReducer      from './Components/AdminComponents/ProductList/ProductListReducer';
import ProductEditReducer      from './Components/AdminComponents/ProductEdit/ProductEditReducer';
import ImageUploaderReducer    from './Components/ProductComponents/ImageUploader/ImageUploaderReducer'
import AdminOrdersListReducer  from './Components/AdminComponents/AdminOrdersList/AdminOrdersListReducer';
import ListAllUsersReducer     from './Components/AdminComponents/ListAllUsers/ListAllUsersReducer';
import UserEditScreenReducer   from './Components/AdminComponents/UserEditScreen/UserEditScreenReducer';
import PlaceOrderScreenReducer from './Components/CartCheckoutComponents/PlaceOrderScreen/PlaceOrderScreenReducer';
import DiscountCodesReducer    from './Components/AdminComponents/AdminOrdersList/DiscountCodes/DiscountCodesReducer';



const rootReducer = combineReducers({
    SignIn          : SignInReducer,
    Home            : HomeReducer,
    ProductDetails  : ProductDetailsReducer,
    Cart            : CartReducer,
    NavBarMini      : NavBarMiniReducer,
    OrdersReturns   : OrdersReturnsReducer,
    RegisterScreen  : RegisterScreenReducer,
    UserProfile     : UserProfileReducer,
    ProductList     : ProductListReducer,
    ProductEdit     : ProductEditReducer,
    ImageUploader   : ImageUploaderReducer,
    AdminOrdersList : AdminOrdersListReducer,
    ListAllUsers    : ListAllUsersReducer,
    UserEditScreen  : UserEditScreenReducer,
    PlaceOrderScreen: PlaceOrderScreenReducer,
    DiscountCodes   : DiscountCodesReducer
    
});

export default rootReducer; 
