import '../App.css';
import { useState, useEffect } from "react";
import Login from './Login';
import Logout from './Logout';
import Signup from './Signup';

function App() {

  const [user, setUser] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    fetch("/me")
      .then((response) => {
      if (response.ok) {
        response.json().then((user) => handleLogin(user));
      }
      else {
        console.log("Auto Login: response not OK")
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
      <h1>Welcome to Neighborshare</h1>
      {isLoggedIn ? <h2>{user}</h2> : <h2>Please Signup</h2>}
      {isLoggedIn ? <Logout onLogout={onLogout}/> : <Signup onSignup={handleSignup}/>}
    </div>
  );
} 

export default App;
