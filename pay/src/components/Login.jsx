import React from "react";
import { Link } from "react-router-dom";
import {Authval} from "../context/Authcontext"

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {userlogin,setuserlogin} = useContext(Authval);

  const handleemail = (e) => {
    setEmail(e.target.value);
  };
  const handlepassword = (e) => {
    setPassword(e.target.value);
  };

  const handleform = (e) => {
    e.preventDefault();
    console.log(email, password);
    let userdata = JSON.parse(localStorage.getItem("logoutdata"));
    // let checkval;
    if (userdata) {
      let checkval = userdata.find((ele) => ele.mail == email && ele.pass == password);
      if (checkval) {
        console.log(checkval);
        setuserlogin(checkval)
      }
      else{
      alert('user does not exist please sign up')
      }
    }
    else{
      alert('user does not exist please sign up')
    }
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <div>
          <img src="/assets/money.jpg" alt="" />
        </div>
        <div>
          <form
            className="login-form"
            role="search"
            onSubmit={(e) => handleform(e)}
          >
            <h2>Login</h2>
            <p>Welcome to Digi Pay</p>
            <input
              className="btn"
              type="email"
              placeholder="email"
              aria-label="Search"
              onChange={(e) => handleemail(e)}
            />
            <input
              className="btn"
              type="password"
              placeholder="password"
              aria-label="Search"
              onChange={(e) => handlepassword(e)}
            />
            <button className="btn" type="submit">
              <i class="fa-solid fa-user"> </i> Login
            </button>
            <p>
              {" "}
              Does not have an account <Link to="/signup">Sign up</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
