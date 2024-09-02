import React, { useState } from "react";
import "./Register.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const Log_in = () => {
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;
  const [user, setuser] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
  });
  const handlechange = (event) => {
    setuser((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };
const handlesubmit= async (event)=>{
  event.preventDefault()
  try {
    const res = await axios.post(`${import.meta.env.VITE_URL}/register`,user)
    if(res.data.message === "Insert success"){
      
      const token = res.headers['authorization']
      localStorage.setItem('authToken',token.split(' ')[1])
      toast.success('Register Success')
      setTimeout(() => {
        navigate('/dashboard')
      }, 1500);
      
    }else{
      toast.error(res.data)
    }
  } catch (error) {
    toast.error("Error is appear")
  }
}
  return (
    <>
      <Toaster />
      <form className="autheninput">
        <label htmlFor="fname">First name</label>
        <input
          type="fname"
          onChange={handlechange}
          name="fname"
          placeholder="First name"
          required
        />
        <label htmlFor="fname">Last name</label>

        <input
          type="fname"
          onChange={handlechange}
          name="lname"
          placeholder="Last name"
          required
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          onChange={handlechange}
          name="email"
          placeholder="Email"
          required
        />
        <label htmlFor="Password">Password</label>
        <input
          type="password"
          onChange={handlechange}
          name="password"
          placeholder="Password"
          required
        />
        <p>FORGOT PASSWORD?</p>
        <div>
          <button className="login" type="submit" onClick={handlesubmit}>
            CREATE ACCOUNT
          </button>
        </div>
      </form>
    </>
  );
};

export default Log_in;
