import React,{useState,useEffect} from "react";
import Dashchart from "./Dashdetails/Dashchart";
import Dashproducts from "./Dashdetails/Dashproducts";
import Dashorder from "./Dashdetails/Dashorder";
import Dashusers from "./Dashdetails/Dashusers";
import axios from "axios";
const Dashcontent = ({ contentid }) => {
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
  const renderContent = () => {
    switch (contentid) {
      case 1:
        return <Dashchart />;
      case 2:
        return <Dashproducts />;
      case 3:
        return <Dashorder />;
      case 4:
        return <Dashusers data={data} setData={setData} />;
      default:
        return null;
    }
  };
  return (
    <>{renderContent()}</>
  );
};

export default Dashcontent;
