import React from "react";
import "./Dashdetail.css";
import { CiSquareRemove } from "react-icons/ci";
import { LuClipboardEdit } from "react-icons/lu";
import axios from "axios";
const Dashusercard = ({
  setData,
  id,
  email,
  fname,
  lname,
  created_at,
  role,
}) => {
  const deleteuser = async () => {
    try {
      const res = await axios.delete(
        `http://localhost:8000/users/delete/${id}`,{
            headers:{
                Authorization: `Bearer ${localStorage.getItem('authToken')}`
            }
        }
      );
      setData((prev) => prev.filter((item) => item.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="dashuser-card">
      <h5>{email}</h5>
      <h5>{fname}</h5>
      <h5>{lname}</h5>
      <h5>{created_at}</h5>
      <h5>{role}</h5>
      <div className="dashedit">
        <h5 onClick={deleteuser}>
          <CiSquareRemove />
        </h5>
        <h5>
          <LuClipboardEdit />
        </h5>
      </div>
    </div>
  );
};

export default Dashusercard;
