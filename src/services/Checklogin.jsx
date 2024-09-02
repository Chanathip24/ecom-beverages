import axios from 'axios'
import React, {  useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Checklogin = ({children}) => {
  const [isAuthen,setAuthen] = useState(false)
  const navigate = useNavigate()
  const check = async() =>{
    const token = localStorage.getItem('authToken')
    if(token) {
        try {
            const res = await axios.get(`${import.meta.env.VITE_URL}/checkcookie`,{
                headers:{
                    Authorization : `Bearer ${token}`
                }
            })
            
            
            if(res.data.msg === "Unauthorized"){
                return setAuthen(false)
                
            }
            setAuthen(true)
            navigate('/')
        } catch (error) {
            navigate('/login')
            setAuthen(false)
        }
    }
    

  }
  useEffect(()=>{
    check()
  },[])
  return isAuthen ? null : children
}

export default Checklogin