import React from 'react'
import './Productcomp.css'
import { IoCheckmark } from "react-icons/io5";
import { FaGrinStars } from "react-icons/fa";
const Productcomp = () => {
    return (
        <div className="container">
            <h5 className='product-path'>
                Home {'>'} All Products {'>'}  Advent Calendar {'>'} <span>Advent Calendar Small</span>
            </h5>
            <div className="product">

                <div className="product-pic">
                    <img src="https://www.waterdrop.com/cdn/shop/files/Advent_Calendar_Small-2024-waterdrop_900x.png?v=1724963607" alt="" />
                </div>
                <div className="product-right">
                    <div className="product-detail">
                        <div className="product-detail-title">
                            <h2>Advent Calendar Small</h2>
                            <p>25 Doors · Vitamins and Zero Sugar · Incl. Limited Edition</p>
                            <hr />
                            <p>$26.90</p>
                        </div>

                        <button>BUY</button>
                        <ul>
                            <li><IoCheckmark /> Free Gift for Orders Above $60</li>
                            <li><IoCheckmark /> ALERT! As the Advent Calendars are pre-sale items, your entire order will be shipped in mid-October.</li>
                            <li><IoCheckmark /> Free shipping from $49</li>
                        </ul>
                        <p className='product-announce'><FaGrinStars /> Club Only: Exclusive Club Code for extra 10% off site-wide.</p>
                        <div className="product-desc">
                            <h5>Description</h5>
                            <p>
                                Countdown to the festivities with our curated selection of 25 Microdrink hydration cubes, including coveted Limited Editions. From bestsellers to community favorites, each hydration cube has been carefully selected to make the wait for Christmas something to pour over.
                            </p>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Productcomp