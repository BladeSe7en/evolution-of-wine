import { combineReducers }   from 'redux';
import HomeReducer           from './Components/Home/HomeReducer';
import SignInReducer         from './Components/SignIn/SignInReducer';
import ProductDetailsReducer from './Components/ProductDetails/ProductDetailsReducer';
import CartReducer           from './Components/Cart/CartReducer';
import NavBarMiniReducer     from './Components/NavBarMini/NavBarMiniReducer';
import OrdersReturnsReducer  from './Components/OrdersReturns/OrdersReturnsReducer';
import RegisterScreenReducer from './Components/RegisterScreen/RegisterScreenReducer';



const rootReducer = combineReducers({
    SignIn         : SignInReducer,
    Home           : HomeReducer,
    ProductDetails : ProductDetailsReducer,
    Cart           : CartReducer,
    NavBarMini     : NavBarMiniReducer,
    OrdersReturns  : OrdersReturnsReducer,
    RegisterScreen : RegisterScreenReducer
});

export default rootReducer; 
