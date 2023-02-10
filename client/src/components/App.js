import '../App.css';
import { useState, useEffect } from "react";
import Login from './Login';

function App() {

  const [user, setUser] = useState("No user yet");

  function handleLogin(user) {
    setUser(user.username)
  }



  return (
    <div className="App">
      <h1>{user}</h1>
      <Login onLogin={handleLogin} />
    </div>
  );
} 

export default App;
