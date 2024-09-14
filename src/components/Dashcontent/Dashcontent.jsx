import React,{useState,useEffect} from "react";
import Dashchart from "./Dashdetails/Dashchart";
import Dashproducts from "./Dashdetails/Dashproducts";
import Dashorder from "./Dashdetails/Dashorder";
import Dashusers from "./Dashdetails/Dashusers";
import axios from "axios";
import Dashaddproduct from "./Dashdetails/Dashaddproduct";
import Dashaddcate from "./Dashdetails/Dashaddcate";
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
      case 6:
        return <Dashaddproduct/>
      case 7 : 
        return <Dashaddcate/>
      default:
        return null;
    }
  };
  return (
    <>{renderContent()}</>
  );
};

export default Dashcontent;
