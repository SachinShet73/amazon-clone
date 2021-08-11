import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
function Login() {
    return (
        <div className = 'login'>
            <Link to = '/'>
            <img
                    className = "login__logo"
                    src = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/263px-Amazon_logo.svg.png" />
            </Link>
            <div className ='login__container'>
            
            <h1>Sign in</h1>
           <form>
               
               <h5>email</h5>
               <input type="text"/>

                <h5>Password</h5>
                <input type="Password"/>


                <button>Sign In</button>               
               </form>
               <p>
                   By signing-in you agree to AMAZON-FAKE-CLONE's Conditions of 

                   use & sale. Please see our Privacy Notice, our Cookies Notice

                   and our Interesr-Based Ads Notice.
               </p>
            </div>
        </div>




    )
}

export default Login
