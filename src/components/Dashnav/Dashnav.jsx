import React,{useState} from "react";
import "./Dashnav.css";
import { CiSearch } from "react-icons/ci";
const Dashnav = () => {
    //search query
    const [search,setSearch] = useState("")

    //handle search query
    const handlechange = (event)=>{
        setSearch((prev)=>(prev+event.target.value))
    }
  return (
    <div className="dashnav">
      <h2>Dashboard</h2>
      <div className="dashbutton">
        <div className="dashsearch">
            <CiSearch/>
          <input type="text" onChange={handlechange}  placeholder="Search here..."/>
        </div>
      </div>
      <div className="dashaccount">
        
      </div>
    </div>
  );
};

export default Dashnav;
