import React from "react";
import "./Dashdetail.css";
import { CiSquareRemove } from "react-icons/ci";
import { LuClipboardEdit } from "react-icons/lu";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
const Dashusercard = ({
  setData,
  id,
  email,
  fname,
  lname,
  created_at,
  role,
}) => {
  const navigate = useNavigate()
  const goedit = ()=>{
    navigate('/dashboard/user/edit/1')
  }
  const deleteuser = async () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      confirmButtonText: "Yes , delete this",
      confirmButtonColor: "#d33",
      showCancelButton: true,
    }).then(async (result) => {
      if (result.isConfirmed) {
        Swal.fire("Delete successfully", "", "success");
        try {
          const res = await axios.delete(
            `${import.meta.env.VITE_URL}/users/delete/${id}`,
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("authToken")}`,
              },
            }
          );
          setData((prev) => prev.filter((item) => item.id !== id));
        } catch (error) {
          alert("Some thing error on usercard");
        }
      }
    });
 
  };
  
  return (
    <div className="dashuser-card">
      <h5>{email}</h5>
      <h5>{fname}</h5>
      <h5>{lname}</h5>
      <h5>{created_at}</h5>
      <h5>{role}</h5>
      <div className="dashedit">
        <h5 onClick={goedit} style={{ backgroundColor: "Blue" }}>
          <LuClipboardEdit />
        </h5>
        <h5 style={{ backgroundColor: "red" }} onClick={deleteuser}>
          <CiSquareRemove />
        </h5>
      </div>
    </div>
  );
};

export default Dashusercard;
