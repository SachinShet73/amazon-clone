import { ListItemAvatar } from '@material-ui/core';
import React from 'react'
import CheckoutProduct from './CheckoutProduct';
import './Payment.css'
import { useStateValue } from './Stateprovider'
import  {Link}  from 'react-router-dom';

function
    Payment() {
    const [{ basket, user }, dispatch] = useStateValue();
    return (
        <div className='payment'>
            <div className='payment__container'>
                <h1>
                    Checkout (<Link to ='/checkout'>{basket?.length} items</Link>)
                </h1>

                {/*Payment section - delivery address*/}
                <div className="payment__section">
                    <div className='payment__title'>
                        <h3> Delivery address</h3>
                    </div>
                    <div className='payment__address'>
                        <p> {user?.email} </p>
                        <p>123 react lane</p>
                        <p>Bangalore India</p>
                    </div>

                </div>

                {/*Payment-section- Review Items */}
                <div className="payment__section">
                    <div className='payment__title'>

                        <h3> Review items and delivery</h3>
                    </div>
                    <div className='payment__items'>
                        {basket.map(item => (
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


                {/* Payment-section - Payment method */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3> Payment method</h3>
                    </div>

                    <div className="payment__details">
                        <h3> stripe magic</h3>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Payment

