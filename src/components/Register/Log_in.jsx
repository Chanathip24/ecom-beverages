import React, { useState } from "react";
import "./Register.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import Swal from 'sweetalert2'
const Log_in = () => {
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;
  const [user, setuser] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
  });
  //err
  const [err,setErr] = useState(null)
  const handlechange = (event) => {
    setuser((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };
const handlesubmit= async (event)=>{
  event.preventDefault()
  Swal.fire({
    title: "Logging in....",
    text: "Please wait",
    icon: "info",
    didOpen: () => {
      Swal.showLoading();
    },
    allowOutsideClick: false,
  });
  try {
    const res = await axios.post(`${import.meta.env.VITE_URL}/register`,user)
    Swal.close()
    if(res.data.message === "Insert success"){
      Swal.fire({
        title: "Register Success",
        text : "สมัครสมาชิกเสร็จแย้วค้าบ",
        icon: "success",
        allowOutsideClick: false,
        showConfirmButton : false,
        timer : 1500,
        timerProgressBar : true
      });
      const token = res.headers['authorization']
      localStorage.setItem('authToken',token.split(' ')[1])
      toast.success('Register Success')
      setTimeout(() => {
        navigate('/dashboard')
      }, 1500);
      
    }else{
      setErr(res.data)
      toast.error(res.data)
    }
  } catch (error) {
    Swal.close()
    console.log(err)
    setErr(error.response.data.msg)
    toast.error(error.response.data.msg)
  }
}
  return (
    <>
      <Toaster />
      <form className="autheninput">
        {err && <h4 style={{color : "red"}}>{err}</h4>}
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
