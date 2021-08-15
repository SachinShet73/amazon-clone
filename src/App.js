import React , {useEffect} from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import {auth} from "./firebase"
import { useStateValue } from './Stateprovider';
import Payment from "./Payment"
import {loadStripe} from "@stripe/stripe-js";
import { Elements} from "@stripe/react-stripe-js"

const promise = loadStripe('pk_test_51JOjzLSGxTQrEUyuHAvjsIuDotb3XFNjlwvxY4EUIB0omsdt0V1L3MS9fEvUqpA1veqgns3A7RZHAz20V2t7pbFG00OyTUN1BV'); 

import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
function App() {
  const [{},dispatch] = useStateValue();

  useEffect(() => {
    // will only run when the app component loads...

    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>>', authUser);

      if (authUser) {
        //if the user just logged in / the user was logged in

        dispatch({
          type: 'SET_USER',
          user: authUser
        })

      } else {
        //the user is logged out
          dispatch({
          type: 'SET_USER',
          user: null
        })

      }
    })
  }, [])

  return (
    // BEM
    <Router>
      <div className="App">
      
      
      <Switch>

       <Route path = "/login">
         

         <Login />
         </Route> 
      <Route path = "/checkout">
      <Header />
      <Checkout/>
     
      </Route>  

      <Route path = "/payment">
      <Header />
      < Payment/>
      
      <payment/>
     
      </Route>
      

      <Route path = "/">
         <Header />    
      <Home />
      </Route>  
      </Switch> 

      </div>
    </Router>
    
  );
}

export default App;
