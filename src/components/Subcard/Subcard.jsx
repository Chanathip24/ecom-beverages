import React from 'react'
import './Subcard.css'
import { TbBottle } from "react-icons/tb";
import { motion } from 'framer-motion';
const Subcard = () => {
  return (
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:0.5}}
    className='Subcard'>
        <div className="subcard-wrapper">
            <div className="icon">
               <TbBottle/>
            </div>
            <div className="subcard-detail">
                <h2>WATER</h2>
                <p>14-20 fl oz of water</p>
            </div>
        </div>

    </motion.div>
  )
}

export default Subcard