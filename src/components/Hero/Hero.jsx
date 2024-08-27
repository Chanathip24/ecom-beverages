import React,{useState,useEffect} from 'react'
import './Hero.css'

import Carousel from '../Carousel/Carousel'
const Hero = () => {

    
    const [index,setIndex]= useState(0)
    useEffect(()=>{

    },[])
  return (
    <div>
        <div className='hero'>
          <Carousel/>
        </div>

    </div>
  )
}

export default Hero