import React, {useState} from "react";

function Login({ onLogin, user }) {
    const [username, setUsername] = useState("");
  
    function handleSubmit(e) {
      e.preventDefault();
      fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username }),
      })
        .then((r) => r.json())
        .then((user) => onLogin(user));
    }
  
    return (
        <div>
            <h1>{user}</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      </div>
    );
  }

  export default Login