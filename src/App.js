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


function App() {
    return (
    <Router>
        <Route exact path='/'          component={Home} />
        <Route path='/product/:id'     component={ProductDetails} />
        <Route path="/cart/:id?"       component={Cart} />
        <Route path='/signin'          component={SignIn} />
        <Route path='/orders-returns'  component={OrdersReturns} />
        <Route path='/register'        component={RegisterScreen} />
        <Route path='/shipping'        component={ShippingAddressScreen} />
        <Route path='/payment'         component={PaymentMethodScreen} />
        <Route path='/placeorder'      component={PlaceOrderScreen} />
        <Route path='/order/:id'      component={OrderScreen} />



        
    </Router>
    );
}

export default App;

