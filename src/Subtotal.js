import React from 'react'
import "./Subtotal.css"
import  CurrencyFormat from "react-currency-format"

function Subtotal() {
    return (
        //refer 1:54:35 for the function explaination
        <div className = "subtotal">
             <CurrencyFormat
             renderText={(value) => (
                 <>
                 <p>
                 Subtotal (0 items): <strong>0</strong>
                 </p>
                 <small className = "subtotal__gift">
                     <input type = "checkbox" />
                     This order contains a gift
                 </small>
                 </>
             )}
             decimalScale = {2}
             value={0}
             displayType={"text"}
             thousandSeparator={true}
             prefix={"₹"}
                />

             <button>Proceed to Checkout</button>   
        </div>
    )
}

export default Subtotal
