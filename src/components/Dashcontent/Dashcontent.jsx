import React,{useState,useEffect} from "react";
import Dashchart from "./Dashdetails/Dashchart";
import Dashproducts from "./Dashdetails/Dashproducts";
import Dashorder from "./Dashdetails/Dashorder";
import Dashusers from "./Dashdetails/Dashusers";
import axios from "axios";
import Dashaddproduct from "./Dashdetails/Dashaddproduct";
import Dashaddcate from "./Dashdetails/Dashaddcate";
import { useParams } from "react-router-dom";
const Dashcontent = ({ contentid }) => {
  const [data,setData] = useState([])
  const {page} = useParams()
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
  const renderContent = () => {
    switch (page) {
      case "main":
        return <Dashchart />;
      case "allproducts":
        return <Dashproducts />;
      case "orders":
        return <Dashorder />;
      case "allusers":
        return <Dashusers data={data} setData={setData} />;
      case "addproduct":
        return <Dashaddproduct/>
      case "category" : 
        return <Dashaddcate/>
      default:
        return <h1>Welcome to dashboard click menu to start</h1>;
    }
  };
  return (
    <>{renderContent()}</>
  );
};

export default Dashcontent;
