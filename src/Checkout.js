import React from 'react';
import './Checkout.css';
import './Subtotal.js'
import Subtotal from './Subtotal';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './Stateprovider';
import FlipMove from 'react-flip-move';
function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue();
    return (
        
            <div className="checkout">

                <div className="checkout__left">

                    <img className="checkout__ad"
                        src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/AUGART21/Event_Page_Header_EN_PC.jpg "
                        alt="">
                    </img>
                    <div>
                        <h3>Hello, {user ? user.email : "Guest"} </h3>
                        <h2 className="checkout__title">
                            Your shopping basket
                        </h2>

                      

                            {
                            basket.map(item => (
                                <CheckoutProduct
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating}
                                />
                            ))}

                        


                    </div>
                </div>
                <div className="checkout__right">
                    <Subtotal />
                </div>
            </div>
        
    )

}

export default Checkout