import React from 'react';
import './css/style.scss'
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

import Home                  from './Components/Home/Home';
import ProductDetails        from './Components/ProductDetails/ProductDetails';
import Cart                  from './Components/Cart/Cart';
import SignIn                from './Components/SignIn/SignIn';
import OrdersReturns         from './Components/OrdersReturns/OrdersReturns';
import RegisterScreen        from './Components/RegisterScreen/RegisterScreen';
import ShippingAddressScreen from './Components/ShippingAddressScreen/ShippingAddressScreen';
import PaymentMethodScreen   from './Components/PaymentMethodScreen/PaymentMethodScreen';
import PlaceOrderScreen      from './Components/PlaceOrderScreen/PlaceOrderScreen';
import OrderScreen           from './Components/OrderScreen/OrderScreen';
import UserProfile           from './Components/UserProfile/UserProfile';
import UserRoute             from './Components/ComponentRoutes/UserRoute';
import AdminRoute            from './Components/ComponentRoutes/AdminRoute';
import ProductListScreen     from './Components/ProductList/ProductList';
import ProductEdit           from './Components/ProductEdit/ProductEdit';
import AdminOrdersList       from './Components/AdminOrdersList/AdminOrdersList';
import ListAllUsers          from './Components/ListAllUsers/ListAllUsers';
import UserEditScreen        from './Components/UserEditScreen/UserEditScreen';



function App() {
    return (
    <Router>
        <Route exact path='/'                 component={Home} />
        <Route exact path='/product/:id'      component={ProductDetails} />
        <Route exact path="/product/:id/edit" component={ProductEdit} />
        <Route path="/cart/:id?"              component={Cart} />
        <Route path='/signin'                 component={SignIn} />
        <Route path='/orders-returns'         component={OrdersReturns} />
        <Route path='/register'               component={RegisterScreen} />
        <Route path='/shipping'               component={ShippingAddressScreen} />
        <Route path='/payment'                component={PaymentMethodScreen} />
        <Route path='/placeorder'             component={PlaceOrderScreen} />
        <Route path='/order/:id'              component={OrderScreen} />
        <UserRoute path='/userProfile'        component={UserProfile} />
        <AdminRoute path="/productlist"       component={ProductListScreen} />
        <AdminRoute path="/adminOrderList"    component={AdminOrdersList} />
        <AdminRoute path="/userlist"          component={ListAllUsers} />
        <AdminRoute path="/user/:id/edit"     component={UserEditScreen} />






        
    </Router>
    );
}

export default App;

