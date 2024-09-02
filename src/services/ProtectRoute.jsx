import React,{useEffect,useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
const ProtectRoute = ({children,role}) => {
    axios.defaults.withCredentials = true;
    const navigate = useNavigate()
    const [isAuthen,setAuthen] = useState(false)
    const checkauth = async () =>{
        try {
            const res = await axios.get(`${import.meta.env.VITE_URL}/checkcookie`)
            if(res.data.msg === "pass"){
                if(role.includes(res.data.role)) return setAuthen(true)
                navigate('/login')
            }else{
            setAuthen(false)
            navigate('/login')
            }
           
        } catch (error) {
            setAuthen(false)
            navigate('/login')
        }
    }
    useEffect(()=>{
        checkauth()
    },[])

    return isAuthen ? children :  null
}

export default ProtectRoute