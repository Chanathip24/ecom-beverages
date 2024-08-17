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
            <Carousel img={"https://cdn.shopify.com/s/files/1/0087/2159/6471/files/featured_image_all_purpose_straw_lid.jpg?v=1722843700"}/>
        </div>

    </div>
  )
}

export default Hero