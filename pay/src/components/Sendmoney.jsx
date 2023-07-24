import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import paytm_data from "../paytm_db.json.json";
import { Authval } from "../context/Authcontext";

function Sendmoney() {
  let { id } = useParams();
  const {histry , sethistry} = useContext(Authval)
  const [text, settext] = useState(0)
  const [user, setuser] = useState({
    email: "",
    username: "",
    account: "",
    card_type: "",
    phone: "",
  });
  const navigate = useNavigate()
  const handlesubmit = (e)=>{
    e.preventDefault()
    sethistry([{user ,money: text } , ...histry ])
    console.log(histry)
    navigate('/history')

  }
  useEffect(() => {
    let filter = paytm_data.filter((e) => e.id == id);
    setuser(filter[0]);
  }, []);

  const handleChange = (e)=>{
    console.log(e.target.value)
    settext(e.target.value)
  }

  return (
    <div className="send-page">
      <h1>Send Money To {user.username}</h1>
      <div className="send-page-details">
        <img src={user.img} alt="" />
        <form onSubmit={(e)=>handlesubmit(e)}>
          <div>
            <h4><i class="fas fa-user"></i> Name:</h4>
            <p>{user.username}</p>
          </div>
          <div>
            <h4><i class="fas fa-envelope"></i> Email:</h4>
            <p>{user.email}</p>
          </div>
          <div>
            <h4><i class="fas fa-id-card"></i> card type:</h4>
            <p>{user.card_type}</p>
          </div>
          <div>
            <h4><i class="fas fa-university"></i> Account Number:</h4>
            <p>{user.account}</p>
          </div>
          <div>
            <h4><i class="fa-solid fa-phone"></i> Phone Number:</h4>
            <p>{user.phone}</p>
          </div>
          <input onChange={(e)=>handleChange(e)} type="number" placeholder="Amount" />
          <button className="btn"><i class="fa-solid fa-money-bill"></i> Pay Now!</button>
        </form>
      </div>
    </div>
  );
}

export default Sendmoney;
