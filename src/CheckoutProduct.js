import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './Stateprovider';
function CheckoutProduct({id,image,title,price,rating}) {
    
    return (
        
        <div className = 'checkoutProduct'>
            <img className = 'checkoutProduct__image' src = {image} alt = "" />

             <div className = "checkoutProduct__info">
                 <p className = "checkoutProduct_title">{title}</p>

                 <p className="checkoutProduct__price"> <small>₹</small>
                 <strong>{price}</strong></p>

                 <div className = "checkOutProduct__rating">
                     {
                         Array(rating)
                         .fill()
                         .map((_,i) =>(
                             <p>⭐️</p>
                         ))
                     }
                 </div>

                 <button>
                     Remove from basket
                 </button>

                
             </div>
        </div>
    )
}

export default CheckoutProduct
