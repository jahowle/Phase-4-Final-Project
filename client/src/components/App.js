import '../App.css';
import { useState, useEffect } from "react";
import Login from './Login';
import Logout from './Logout';
import Signup from './Signup';

function App() {

  const [user, setUser] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => handleLogin(user));
      }
    });
  }, []);

  function handleLogin(user) {
    setUser(user.username)
    setIsLoggedIn(true)
  }

  function handleSignup(user) {
    setUser(user.username)
    setIsLoggedIn(true)
  }

  function onLogout() {
    setUser("")
    setIsLoggedIn(!isLoggedIn)
  }



  return (
    <div className="App">
      <h1>Welcome, {user}</h1>
      {isLoggedIn ? <Logout onLogout={onLogout}/> : <Signup onSignup={handleSignup}/>}
    </div>
  );
} 

export default App;
