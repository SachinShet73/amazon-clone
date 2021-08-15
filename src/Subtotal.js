import React from 'react'
import "./Subtotal.css"
import  CurrencyFormat from "react-currency-format"
import {useStateValue } from "./Stateprovider";
import { getBasketTotal } from './Reducer';
import {useHistory} from 'react-router-dom'
function Subtotal() {
    const history = useHistory();
    const [{ basket } , dispatch] = useStateValue();
    
    return (
        //refer 1:54:35 for the function explaination
        <div className = "subtotal">
             <CurrencyFormat
             renderText={(value) => (
                 <>
                 <p>
                 Subtotal ({basket.length}items): <strong>{value}</strong>
                 </p>
                 <small className = "subtotal__gift">
                     <input type = "checkbox" />
                     This order contains a gift
                 </small>
                 </>
             )}
             decimalScale = {2}
             value={getBasketTotal(basket)}
             displayType={"text"}
             thousandSeparator={true}
             prefix={"₹"}
                />

             <button onClick = {e => history.push('/payment')}>Proceed to Checkout</button>   
        </div>
    )
}

export default Subtotal
