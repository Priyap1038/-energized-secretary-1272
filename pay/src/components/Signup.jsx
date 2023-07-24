import React from "react";
import {Link} from "react-router-dom"
import { useState } from "react";

function Signup() {

  const [user,setUser] =useState("")
  const [mail,setMail] =useState("")
  const [pass,setPass] =useState("")
 
 
 
   const handleUser =(e)=>{
    //console.log(e.target.value)
    setUser(e.target.value)
   }
 
 
   const handleMail=(e)=>{
    // console.log(e.target.value)
    setMail(e.target.value)
   }
 
   const handlePass=(e)=>{
    // console.log(e.target.value)
    setPass(e.target.value)
   }
 
   const handleSignUp=(e)=>{
     e.preventDefault();
     //console.log(user,mail,pass)
     let obj={
       user:user,
       mail:mail,
       pass:pass
     }
     //console.log(obj)
     let userdata=JSON.parse(localStorage.getItem("logoutdata"));
     if(userdata){
       userdata.push(obj)
       localStorage.setItem("logoutdata",JSON.stringify(userdata));
       alert("Signu success")
     }
     else{
     localStorage.setItem("logoutdata",JSON.stringify([obj]));
     }
   }


  return (
    <div className="signup-page">
      <div className="login-box">
        <div>
          <img src="/assets/money.jpg" alt="" />
        </div>
        <div>
          <form className="login-form" role="search" onSubmit={(e)=>handleSignUp(e)}>
            <h2>Sign Up!</h2>
            <p>Welcome to Digi Pay!</p>
            <input className="btn" type="text" placeholder="username"  aria-label="Search"
        onChange={(e)=>handleUser(e)}/>
            <input className="btn" type="email" placeholder="email" aria-label="Search"
        onChange={(e)=>handleMail(e)}/>
            <input className="btn" type="password" placeholder="password"  aria-label="Search"
        onChange={(e)=>handlePass(e)}/>
            <button className="btn" type="submit" onClick={handleSignUp}> <i class="fa-regular fa-user"></i> Sign up</button>
            <p>Already have an account <Link to="/login">Login</Link></p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
