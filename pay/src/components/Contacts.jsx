import React, { useState } from "react";
import paytm_data from "../paytm_db.json.json";
import { Link } from "react-router-dom";

function Contacts() {
  const [contact, setcontact] = useState(paytm_data);
  return (
    <div className="contact-page">
      {paytm_data.map((item) => (
        <div className="contact-user">
          <div className="contact-icon">
            {/* <i class="fa-regular fa-user"></i> */}
            <img src={item.img} alt="" />
          </div>
          <div className="contact-details">
            <h4>{item.username}</h4>
            <p><i class="fa-solid fa-phone"></i> {item.phone}</p>
          </div>
            <Link to={`/send/${item.id}`} className="btn"><i class="fa-solid fa-money-bill"></i> Send Money</Link>
        </div>
      ))}
    </div>
  );
}

export default Contacts;
