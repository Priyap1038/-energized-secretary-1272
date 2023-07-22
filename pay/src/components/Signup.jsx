import React from "react";

function Signup() {
  return (
    <div className="signup-page">
      <div className="login-box">
        <div>
          <img src="/assets/money.jpg" alt="" />
        </div>
        <div>
          <form>
            <h2>Sign Up!</h2>
            <p>Welcome to Digi Pay!</p>
            <input className="btn" type="text" placeholder="username" />
            <input className="btn" type="email" placeholder="email" />
            <input className="btn" type="password" placeholder="password" />
            <button className="btn"> <i class="fa-regular fa-user"></i> Sign up</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
