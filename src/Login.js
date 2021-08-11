import React , { useState } from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import {auth} from "./firebase"

function Login() {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('')
    const signIn = e =>
    {
                e.preventDefault();
                //some fancy fiebase code......
    }
    const register = e =>
    {
        e.preventDefault();

        //some fancy firebase signup........

        auth.createUserWithEmailAndPassword(email,password)
        .then((auth) => {
            // it sucessfullt created a new user with email and password
            console.log(auth);
        })

        .catch(error => alert(error.message))


    }
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
               
               <h5>E-mail</h5>
               <input type="text" value = {email} onChange =
               {e => setEmail(e.target.value)}
               />

                <h5>Password</h5>
                <input type="Password" value = {password}
                value = {password} onChange =
                {e => setPassword(e.target.value)}
                />


                <button type = "submit"
                onClick = {signIn}
                className = "login__signInButton">Sign In</button>               
               </form>
               <p>
                   By signing-in you agree to AMAZON-FAKE-CLONE's Conditions of 

                   use & sale. Please see our Privacy Notice, our Cookies Notice

                   and our Interest-Based Ads Notice.
               </p>

               <button
               onClick = {register}
               className = "login__registerButton" >New customer? Start here.</button>
            </div>
        </div>




    )
}

export default Login
