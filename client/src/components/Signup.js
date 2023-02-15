import React, {useState} from "react";
import { NavLink } from "react-router-dom";

function Signup({onSignup}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    
    function handleSubmit(e) {
        e.preventDefault();
        fetch("/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ 
              username,
              password,
              password_confirmation: passwordConfirmation
           }),
        })
          .then((r) => {
            if(r.ok) {
                r.json().then((user) => onSignup(user))
            }
            else {
                console.log("Signup: Response Not OK")
            }
          })
      }
    
      return (
          <div>
        <form onSubmit={handleSubmit}>
        <label for="username">Username</label>
          <input
              name="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label for="password">Password</label>
           <input
              name="password"
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
           <label htmlFor="password_confirmation">Confirm Password:</label>
        <input
          type="password"
          id="password_confirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        />
          <button type="submit">Partner SignUp</button>
        </form>
        <h4>Already have an account?</h4>
        <NavLink
        to="/login">
            <button>Login</button>
        </NavLink>
        </div>
      );
}

export default Signup