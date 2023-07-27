import React from "react";
import "../index.css";
import { useNavigate, Link } from "react-router-dom";

const SignIn = () => {
  const history = useNavigate();

  async function submit(e) {
    e.preventDefault();
    history("/home");
  }
  return (
    <form className="form">
      <p className="title">Login</p>
      <p className="message">Signin to your base Lieutenant.</p>
      <div className="flex">
        <label>
          <input required placeholder="" type="text" className="input" />
          <span>Email</span>
        </label>
      </div>
      <label>
        <input required placeholder="" type="password" className="input" />
        <span>Password</span>
      </label>

      <button type="submit" className="submit" onClick={submit}>
        Submit
      </button>

      <p className="signin">
        Want to start new? <Link to="/signup">Signup Page</Link>
        <br />
        <Link to="/forgot">Forgot Password</Link>
      </p>
    </form>
  );
};

export default SignIn;
