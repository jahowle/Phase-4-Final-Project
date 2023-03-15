import React, {useState, useContext} from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../context/user";


function Login() {
  const history = useHistory();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const { handleLogin } = useContext(UserContext);

  
    function handleSubmit(e) {
      e.preventDefault();
      fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
            username,
            password
         }),
      })
      .then((r) => {
        if(r.ok) {
            console.log("Login: Success")
            r.json().then((user) => handleLogin(user))
            history.push("/");
        }
        else {
            console.log("Login: Response Not OK")
        }
      })
    }
  
    return (
        <div>
            <h1>Login</h1>
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
        <button type="submit">Login</button>
      </form>
      </div>
    );
  }

  export default Login