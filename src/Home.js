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
                    <Product title = "Because Life is a Gift :): Stories of hope, courage and perseverance"
                     price = {82} 
                     image="https://m.media-amazon.com/images/P/B00O6CDSX4.01._SCLZZZZZZZ_SX500_.jpg" 
                     rating = {5}/>
                    <Product title = "OnePlus Nord 2 5G (Gray Sierra, 8GB RAM, 128GB Storage)"
                     price = {"29,999"} 
                     image="https://images-eu.ssl-images-amazon.com/images/I/41bUrjJLJyS._SX300_SY300_QL70_FMwebp_.jpg" 
                     rating = {4}/>

                    
                    
                </div>

                <div className="home__row">
                <Product title = "HP Pavilion (Ryzen 5-4600H/8GB/1TB HDD)" 
                    price = {"63,990.00"}
                     image="https://m.media-amazon.com/images/I/41CED+NsupL._SY300_SX300_.jpg" 
                     rating = {4}/>
                <Product title = "Optimum Nutrition (ON) Gold Standard 100% Whey Protein Powder"
                     price = {"2,699"} 
                     image="https://m.media-amazon.com/images/I/716uIeq4rfL._SY355_.jpg" 
                     rating = {5}/>
                <Product title = "Echo Dot (3rd Gen) - #1 smart speaker brand in India with Alexa (Black)"
                     price = {"2,449.00"} 
                     image="https://m.media-amazon.com/images/I/61WUqJd4dfS._SY450_.jpg" 
                     rating = {5}/>
                </div>
                
                <div className="home__row">
                    
                <Product title = "LG 29 inch Ultrawide Full HD IPS Gaming, Multitasking Monitor with 1ms Response Rate, 75Hz Refresh Rate - USB C, Display Port, HDMI- 29UM69G"
                     price = {"18,399.00"} 
                     image="https://m.media-amazon.com/images/I/81t1tAzEgGL._SX425_.jpg" 
                     rating = {5}/>
                </div>

            </div>
        </div>
    )
}

export default Home;

