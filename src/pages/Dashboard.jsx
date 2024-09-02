import React, { useEffect, useState } from "react";
import Dashnav from "../components/Dashnav/Dashnav";
import Dashsidebar from "../components/Dashsidebar/Dashsidebar";
import Dashcontent from "../components/Dashcontent/Dashcontent";
import axios from "axios";

const Dashboard = () => {
  const [menu, setActive] = useState(1);
  const [role, setRole] = useState(null);
  const getrole = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_URL}/checkcookie`,{
        headers:{
            Authorization : `Bearer ${localStorage.getItem('authToken')}`
        }
      });
      setRole(res.data.role);
    } catch (error) {
      console.log("Something wrong happen");
    }
  };
  const changemenu = (id) => {
    setActive(id);
  };
  useEffect(() => {
    getrole();
  }, []);
  return (
    <>
      <div className="dashcontainer">
        <Dashsidebar activemenu={menu} changemenu={changemenu} />
        <div className="dashcontent">
          <h3>You are {role} kub </h3>
          <Dashnav />
          <Dashcontent contentid={menu} />
          {/* Some content */}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
