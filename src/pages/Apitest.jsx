import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Apitest = () => {
    const [data, setData] = useState([])
    const fetch = async () =>{
        try {
            const res= await axios.get("http://localhost:8000/")
            
            setData(res.data)
            
        } catch (error) {
            
        }
    }
    useEffect(()=>{
        fetch()
        
    },[])
  return (
    <div>
        {data && data.map((item,key)=>{
            return <h1 key={key}>{item.email}</h1>
        })}
    </div>
  )
}

export default Apitest