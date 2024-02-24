import React, { useRef } from "react";
import "./Signup.scss";
import { Link } from "react-router-dom";

function Signup() {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();

    console.log(firstNameRef.current.value);
    console.log(lastNameRef.current.value);
    console.log(emailRef.current.value);
    console.log(passwordRef.current.value);

    alert("Signup Done!");
  }

  return (
    <div className="Signup">
      <div className="container signup-box">
        <h2 className="heading">Create a hub</h2>
        <p className="para-text">
          Already have an account? <Link to="/login">Log in</Link>
        </p>
        <form onSubmit={handleSubmit}>
          <div className="full-name">
            <input
              type="text"
              placeholder="First name"
              ref={firstNameRef}
              required={true}
            />
            <input
              type="text"
              placeholder="Last name"
              ref={lastNameRef}
              required
            />
          </div>
          <input
            type="email"
            placeholder="Work email"
            ref={emailRef}
            required
          />
          <input
            type="password"
            placeholder="Password or phrase"
            ref={passwordRef}
            required
          />
          <input
            type="submit"
            className="button"
            value="CONTINUE"
            onClick={handleSubmit}
          />
        </form>
        <p className="footer-text">
          Want to join an existing hub? Ask your team to invite you.
        </p>
      </div>
    </div>
  );
}

export default Signup;
