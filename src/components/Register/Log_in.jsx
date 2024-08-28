import React,{useState} from "react";
import "./Register.css";
import axios from 'axios'

const Log_in = () => {
    const[user,setuser] = useState({
        fname : "",
        lname : '',
        email : '',
        password : ''
    })
    const handlechange=(event)=>{
        setuser((prev)=>({...prev,[event.target.name]:event.target.value}))
      }
      const handlesubmit= async (event)=>{
        event.preventDefault()
        try {
            const res = await axios.post("http://localhost:8000/register",user)
            if(res.data.message === "Insert success"){
                alert("register success")
            }
        } catch (error) {
            console.log(error)
        }
        
      }
  return (
    <form className="autheninput">
      <label htmlFor="fname">First name</label>
      <input type="fname" onChange={handlechange} name="fname" placeholder="First name" required />
      <label htmlFor="fname">Last name</label>

      <input type="fname" onChange={handlechange} name="lname" placeholder="Last name"  required/>
      <label htmlFor="email">Email</label>
      <input type="email" onChange={handlechange} name="email" placeholder="Email" required />
      <label htmlFor="Password">Password</label>
      <input type="password" onChange={handlechange} name="password" placeholder="Password" required/>
      <p>FORGOT PASSWORD?</p>
      <div>
        <button className="login" type="submit" onClick={handlesubmit}>CREATE ACCOUNT</button>
      </div>
    </form>
  );
};

export default Log_in;
