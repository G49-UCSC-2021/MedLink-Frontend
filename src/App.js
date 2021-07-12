// import { Container } from '@material-ui/core';
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// import './App.css';
import Index from './containers/mainLandingPage/Home'
import Signin from './containers/signin/SignIn'
import SignUpUser from './containers/signup/SignUpUser'
import Profile from './containers/customer/profile/Profile'
import Form from './containers/customer/form/Form'
import Checkout from './containers/customer/payment/Checkout'
import Customer from './containers/customer/layouts/Customer.js'
import SignUpAdmin from './containers/admin/SignUpAdmin'
import SignInAdmin from './containers/admin/SignInAdmin'
import Admin from './containers/admin/layouts/Admin.js'
import customerSignup from './containers/customer/customersignup'
import customerSignin from './containers/customer/customersignin'
//import AdminDashboard from './containers/admin/AdminDashboard';
import Pharmacy from './containers/pharmacy/layouts/Pharmacy'
import PrivateRoute from './components/HOC/privateRoute';
// import privateRoute from './components/HOC/privateRoute'
import SignUpPharmacy from './containers/pharmacy/SignUpPharmacy'
import SignInPharmacy from './containers/pharmacy/SignInPharmacy'






function App() {
  return (
    <div className="App">
       <Router>
        <Switch>
          <Route path="/" exact component={Index} />
          <Route path="/Signin" component={Signin} />
          <Route path="/SignupUser" component={SignUpUser} />
          <Route path="/Customer" component={Customer} />
          <Route path="/Profile" component={Profile} />
          <Route path="/Form" component={Form} />
          <Route path="/Checkout" component={Checkout} />
           


          <PrivateRoute path="/admin" component={Admin} />
          <Route path="/adminsignup" component={SignUpAdmin} />
          <Route path="/adminsignin" component={SignInAdmin} />


          <Route path="/customersignup" component={customerSignup} />
          <Route path="/customersignin" component={customerSignin} />

          <Route path="/pharmacy" component={Pharmacy} />
          <Route path="/pharmacysignup" component={SignUpPharmacy} />
          <Route path="/pharmacysignin" component={SignInPharmacy} />


        </Switch>
      </Router>
      
      
      
    </div>
  ); 
}

export default App;
