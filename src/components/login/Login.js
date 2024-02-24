import React, { useState } from "react";
import "./Login.scss";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    console.log(email);
    console.log(password);

    alert("Login Done!");
  }

  return (
    <div className="Login">
      <div className="container signup-box">
        <h2 className="heading">Sign in</h2>
        <p className="para-text">
          Do not have an account? <Link to="/signup">Sign up</Link>
        </p>
        <form className="form-box" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Work email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input type="submit" className="button" value="CONTINUE" />
        </form>
      </div>
    </div>
  );
}

export default Login;
