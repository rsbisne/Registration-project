import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "../index.css";
const Form = () => {
  const history = useNavigate();

  async function submit(e) {
    e.preventDefault();
    history("/home");
  }
  return (
    <form className="form">
      <p className="title">Register</p>
      <p className="message">Signup to your base Lieutenant.</p>
      <div className="flex">
        <label>
          <input required placeholder="" type="text" className="input" />
          <span>Firstname</span>
        </label>
        <label>
          <input required placeholder="" type="text" className="input" />
          <span>Lastname</span>
        </label>
      </div>

      <label>
        <input required placeholder="" type="email" className="input" />
        <span>Email</span>
      </label>

      <label>
        <input required placeholder="" type="password" className="input" />
        <span>Password</span>
      </label>

      <label>
        <input required placeholder="" type="password" className="input" />
        <span>Confirm password</span>
      </label>

      <button type="submit" className="submit" onClick={submit}>
        Submit
      </button>

      <p className="signin">
        Already have an account? <Link to="/">Signin Page</Link>
      </p>
    </form>
  );
};
export default Form;
