import React from 'react';
import './Checkout.css';
import './Subtotal.js'
import Subtotal from './Subtotal';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './Stateprovider';
function Checkout() {
    const [{basket},dispatch]= useStateValue();
    return (
    <div className = "checkout">
       
        <div className ="checkout__left">

            <img className = "checkout__ad" 
            src = "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/AUGART21/Event_Page_Header_EN_PC.jpg " 
            alt = "">
            </img>
            <div>
                <h2 className = "checkout__title">
                    Your shopping basket
                </h2>

                
                    
                        <CheckoutProduct 
                        id = {1234567891}
                        title = "This is a test"
                        image = "https://images-eu.ssl-images-amazon.com/images/I/41bUrjJLJyS._SX300_SY300_QL70_FMwebp_.jpg"
                        price = {26000}
                        rating = {5}
                        />

                        <CheckoutProduct 
                        id = {1234567891}
                        title = "This is a test"
                        image = "https://images-eu.ssl-images-amazon.com/images/I/41bUrjJLJyS._SX300_SY300_QL70_FMwebp_.jpg"
                        price = {26000}
                        rating = {5}
                        />
                        
                        
                        

                        

                        
                    
                    
                    
                
                
                {/*CheckOut Product*/}
                {/*CheckOut Product*/}
                {/*CheckOut Product*/}
                {/*CheckOut Product*/}
            </div>
        </div>
        <div className ="checkout__right">
      <Subtotal /> 
     </div>
    </div>
    )
}

export default Checkout