import React from 'react'
import './Scb.css'
const Scb = () => {
    
  return (
    <div className='scb container'>
        <div className='scb-container'>
            <div className='scb-right'>
                <h1>Subscribe and never run out of your favorites!</h1>
                <p>Subcribe to your favorite flavors and save up to 20%. Customize to your needs: change, pause or cancel at any time!</p>
                <button>SUBCRIBE NOW</button>
            </div>
            <div className='scb-left'>
                <img src="https://www.waterdrop.com/cdn/shop/files/promotional-banner-subscription-homepage-desktop_1_1400x.jpg?v=1718905984" alt=""  width={820}/>
            </div>

        </div>
    </div>
  )
}

export default Scb