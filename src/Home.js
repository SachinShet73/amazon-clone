import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
    return (
        <div className='home'>
            <div className="home__container">
                <img 
                className = "home__image"
                src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_TallHero_Gamers_en_US_1x._CB667161802_.jpg"
                alt=""
                />

                <div className="home__row">
                    <Product title = "Because life is a gift" price = {29.99} image="https://m.media-amazon.com/images/P/B00O6CDSX4.01._SCLZZZZZZZ_SX500_.jpg" rating = {5}/>
                    <Product />
                    
                </div>

                <div className="home__row">
                <Product />
                <Product />
                <Product />
                </div>
                
                <div className="home__row">
                    
                <Product />
                </div>

            </div>
        </div>
    )
}

export default Home;

