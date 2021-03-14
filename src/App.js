import React from 'react';
import './css/style.scss'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Home            from './Components/Home/Home';
 import ProductDetails from './Components/ProductDetails/ProductDetails';
import Cart from './Components/Cart/Cart';
import SignIn from './Components/SignIn/SignIn';
import OrdersReturns from './Components/OrdersReturns/OrdersReturns';
// import AdminLogin      from './Components/AdminLogin';
// import ConfirmOrCancel from './Components/ConfirmOrCancel';
// import TalksPage       from './Components/TalksPage';
// import Organizers      from './Components/Organizers';
// import SignUp          from './Components/SignUp';
// import Thankyou        from './Components/Thankyou'

function App() {
  return (
    <Router>
            <Route exact path='/' component={Home} />
            <Route path='/product/:id' component={ProductDetails} />
            <Route path="/cart/:id?" component={Cart} />
            <Route path='/signin' component={SignIn} />
            <Route path='/orders-returns' component={OrdersReturns} />
            {/* 
            <Route path='/Organizers' component={Organizers} />
            <Route path='/SignUp' component={SignUp} />
            <Route path='/Thankyou' component={Thankyou} /> */}
        </Router>
  );
}

export default App;

