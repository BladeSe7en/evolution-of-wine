import React from 'react';
import './css/style.scss'
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

import Home                  from './Components/Home/Home';
import ProductDetails        from './Components/ProductComponents/ProductDetails/ProductDetails';
import Cart                  from './Components/CartCheckoutComponents/Cart/Cart';
import SignIn                from './Components/UserComponents/SignIn/SignIn';
import OrdersReturns         from './Components/CartCheckoutComponents/OrdersReturns/OrdersReturns';
import RegisterScreen        from './Components/UserComponents/RegisterScreen/RegisterScreen';
import ShippingAddressScreen from './Components/CartCheckoutComponents/ShippingAddressScreen/ShippingAddressScreen';
import PaymentMethodScreen   from './Components/CartCheckoutComponents/PaymentMethodScreen/PaymentMethodScreen';
import PlaceOrderScreen      from './Components/CartCheckoutComponents/PlaceOrderScreen/PlaceOrderScreen';
import OrderScreen           from './Components/CartCheckoutComponents/OrderScreen/OrderScreen';
import UserProfile           from './Components/UserComponents/UserProfile/UserProfile';
import UserRoute             from './Components/UtilityComponents/ComponentRoutes/UserRoute';
import AdminRoute            from './Components/UtilityComponents/ComponentRoutes/AdminRoute';
import ProductListScreen     from './Components/AdminComponents/ProductList/ProductList';
import ProductEdit           from './Components/AdminComponents/ProductEdit/ProductEdit';
import AdminOrdersList       from './Components/AdminComponents/AdminOrdersList/AdminOrdersList';
import ListAllUsers          from './Components/AdminComponents/ListAllUsers/ListAllUsers';
import UserEditScreen        from './Components/AdminComponents/UserEditScreen/UserEditScreen';
import DiscountCodes         from './Components/AdminComponents/AdminOrdersList/DiscountCodes/DiscountCodes';
import DiscountCodeEdit      from './Components/AdminComponents/DiscountCodeEdit/DiscountCodeEdit';



function App() {
    return (
    <Router>
        <Route exact path='/'                     component={Home} />
        <Route exact path='/product/:id'          component={ProductDetails} />
        <Route exact path="/product/:id/edit"     component={ProductEdit} />
        <Route path="/cart/:id?"                  component={Cart} />
        <Route path='/signin'                     component={SignIn} />
        <Route path='/orders-returns'             component={OrdersReturns} />
        <Route path='/register'                   component={RegisterScreen} />
        <Route path='/shipping'                   component={ShippingAddressScreen} />
        <Route path='/payment'                    component={PaymentMethodScreen} />
        <Route path='/placeorder'                 component={PlaceOrderScreen} />
        <Route path='/order/:id'                  component={OrderScreen} />
        <UserRoute path='/userProfile'            component={UserProfile} />
        <AdminRoute path="/productlist"           component={ProductListScreen} />
        <AdminRoute path="/adminOrderList"        component={AdminOrdersList} />
        <AdminRoute path="/userlist"              component={ListAllUsers} />
        <AdminRoute path="/user/:id/edit"         component={UserEditScreen} />
        <AdminRoute path="/discountCodes"         component={DiscountCodes} />
        <AdminRoute path="/discountCode/:id/Edit" component={DiscountCodeEdit} />








        
    </Router>
    );
}

export default App;

