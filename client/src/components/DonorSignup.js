import React, {useState} from "react";
import { NavLink, useHistory } from "react-router-dom";


function DonorSignup({onSignup}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    
    const history = useHistory()

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ 
              username,
              role: "Donor",
              partner_id: 203,
              password,
              password_confirmation: passwordConfirmation
           }),
        })
          .then((r) => {
            if(r.ok) {
                r.json().then((user) => onSignup(user))
                history.push("/");
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
           <label for="password_confirmation">Confirm Password:</label>
        <input
          type="password"
          id="password_confirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        />
          <button type="submit">Donor SignUp</button>
        </form>
        <h4>Already have an account?</h4>
        <NavLink
        to="/login">
            <button>Login</button>
        </NavLink>
        </div>
      );
}

export default DonorSignup