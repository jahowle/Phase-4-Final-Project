import '../App.css';
import { useState, useEffect } from "react";
import Login from './Login';
import Logout from './Logout';

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
    console.log(user)
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
      {isLoggedIn ? <Logout onLogout={onLogout}/> : <Login onLogin={handleLogin}/>}
    </div>
  );
} 

export default App;
