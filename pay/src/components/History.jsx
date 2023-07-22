import React, { useContext } from "react";
import { Authval } from "../context.jsx/Authcontext";

function History() {
  const { histry, sethistry } = useContext(Authval);
  return (
    <div className="history-page">
      <h2> Available Balance RS 4000</h2>
      <div className="history-details">
        <h4><i class="fa-solid fa-image"></i> Image</h4>
        <h4><i class="fa-solid fa-person"></i> Name</h4>
        <h4><i class="fa-solid fa-envelope"></i> Email</h4>
        <h4><i class="fa-solid fa-phone"></i> Phone Number</h4>
        <h4><i class="fa-solid fa-money-bill"></i> Money Sent</h4>
      </div>
      {histry.map((item) => (
        <div className="history-details">
          <img src={item.user.img} alt="" />
          <p>{item.user.username}</p>
          <p>{item.user.email}</p>
          <p>{item.user.phone}</p>
          <p>&#8377; {item.money}</p>
        </div>
      ))}
    </div>
  );
}

export default History;
