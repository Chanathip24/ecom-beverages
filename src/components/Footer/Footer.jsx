import React from 'react'
import './Footer.css'
import { FaHeart } from "react-icons/fa";
const Footer = () => {
  return (
    <div className='Footer'>
        <div className="container">
            <h4>© 2023 Waterdrop Co., Ltd. ( Site made with love <FaHeart/> by Waterdrop ) </h4>
        </div>
    </div>
  )
}

export default Footer