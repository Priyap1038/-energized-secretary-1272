import React from "react";

function Login() {
  return (
    <div className="login-page">
      <div className="login-box">
        <div>
          <img src="/assets/money.jpg" alt="" />
        </div>
        <div>
          <form>
            <h2>Login</h2>
            <p>Welcome to Digi Pay</p>
            <input className="btn" type="email" placeholder="email" />
            <input className="btn" type="password" placeholder="password" />
            <button className="btn"><i class="fa-solid fa-user"> </i> Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
