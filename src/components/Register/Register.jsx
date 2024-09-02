import React, { useState } from "react";
import "./Register.css";
import Log_in from "./Log_in";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast,{Toaster} from 'react-hot-toast'
const Register = () => {
  axios.defaults.withCredentials= true
  const navigate = useNavigate()
  const [button, setbutton] = useState(2);
    const[user,setuser] = useState({
        email : '',
        password : ''
    })
  const setactive = (id) => {
    setbutton(id);
  };
  const handlechange=(event)=>{
    setuser((prev)=>({...prev,[event.target.name]:event.target.value}))
  }
  const handlesubmit= async (event)=>{
    event.preventDefault()
    try {
        const res = await axios.post(`${import.meta.env.VITE_URL}/login`,user)
        if(res.data.msg === "pass"){
            navigate('/dashboard')
        }else{
          toast.error("Username or Password is wrong.")
        }
    } catch (error) {
      toast.error("Username or Password is wrong.")

    }
  }
  return (
    <>
    <Toaster/>
      <div className="authen container-fluid">
        <div className="img">
          <img
            src="https://www.waterdrop.com/cdn/shop/files/waterdrop-club-main-image.jpg?v=1672742605"
            alt=""
          />
        </div>
        <div className="authenblock">
          <div className="authen-wrapper">
            <div className="authenbutton">
              <button
                className={button === 1 ? "active" : null}
                onClick={() => setbutton(1)}
              >
                Join now
              </button>
              <button
                className={button === 2 ? "active" : null}
                onClick={() => setbutton(2)}
              >
                Log-in
              </button>
            </div>
            <div className="mytext">
              <h2>Receive a 15% off you first purchase when you sign up.</h2>
              <div>
                <p>Join the waterdrop Club today for free.</p>
                <p>Conveniently manage your subscriptions and more.</p>
              </div>
            </div>
            {button === 1 ? (
              <Log_in />
            ) : (
              <form className="autheninput">
                <label htmlFor="email" >Email</label>
                <input type="email" placeholder="Email" name="email" onChange={handlechange} required/>
                <label htmlFor="Password">Password</label>
                <input type="password" placeholder="Password" onChange={handlechange} name="password" required/>
                <p>FORGOT PASSWORD?</p>
                <div>
                  <button className="login" onClick={handlesubmit}>LOGIN</button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
