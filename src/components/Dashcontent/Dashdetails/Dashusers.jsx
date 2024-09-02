import React, { useEffect ,useState} from "react";
import "./Dashdetail.css";
import { FaRegSquarePlus } from "react-icons/fa6";

import axios from "axios";
import Dashusercard from "./Dashusercard";
import { TbH1 } from "react-icons/tb";

const Dashusers = () => {
    axios.defaults.withCredentials = true;
    const [data,setData] = useState([])
    const getuser = async ()=>{
        try {
            const res = await axios.get(`${import.meta.env.VITE_URL}/users`,{
                headers:{
                    Authorization : `Bearer ${localStorage.getItem('authToken')}`
                }
            })
            setData(res.data.result)
        } catch (error) {
            console.log(error)
        }
        
        
    }
    useEffect(()=>{
        getuser()
        
    },[])
  return (
    <div className="dashuser">
      <div className="dashuser-title">
        <h2>All users</h2>
        <button>
          <FaRegSquarePlus /> Add new user
        </button>
      </div>
      <div className="dashuser-container">
        {data.map((item,index)=>{
            return <Dashusercard setData={setData} id={item.id} email={item.email} fname={item.fname} lname={item.lname} key={index} role={item.role} created_at={item.created_at}/>
        })}


      </div>
    </div>
  );
};

export default Dashusers;
