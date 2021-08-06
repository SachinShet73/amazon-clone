import React from 'react'
import "./Product.css"
function Product({ title , image , price ,rating}) {
    return (
        <div className="product">
            <div className="product__info">
                <p>
                Because Life is a Gift
                </p>
                <p className="product__price">
                    <small>₹</small>
                    <strong>82.60</strong>
                </p>
            <div className = "product__rating">

                <p>⭐️</p>
                
            </div>
        
            </div>
            <img src = "https://m.media-amazon.com/images/P/B00O6CDSX4.01._SCLZZZZZZZ_SX500_.jpg" alt = "" />
        <button>
            Add to basket
        </button>
        
        </div>
    )
}

export default Product;
