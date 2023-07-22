import React from "react";

function Home() {
  return (
    <div className="home-page">
      <div className="header">
        <div>
          <h1>Payments made easy on Easy Pay</h1>
          <p>
            A platform for accepting payment, making payments and paying bills
          </p>
          <div>
            <button className="btn">Get Started</button>
            <button className="btn">Join our Community</button>
          </div>
        </div>
        <img src="/assets/cash.png" alt="" />
      </div>
    </div>
  );
}

export default Home;
