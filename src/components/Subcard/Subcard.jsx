import React from 'react'
import './Subcard.css'
import { TbBottle } from "react-icons/tb";
const Subcard = () => {
  return (
    <div className='Subcard'>
        <div className="subcard-wrapper">
            <div className="icon">
               <TbBottle/>
            </div>
            <div className="subcard-detail">
                <h2>WATER</h2>
                <p>14-20 fl oz of water</p>
            </div>
        </div>

    </div>
  )
}

export default Subcard