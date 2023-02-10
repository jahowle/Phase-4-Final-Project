import '../App.css';
import { useState, useEffect } from "react";
import Login from './Login';

function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  function handleLogin(user) {
    setUser(user);
  }

  // function handleLogout() {
  //   setUser(null);
  // }


  return (
    <div className="App">
      <Login onLogin={handleLogin} user={user}/>
    </div>
  );
} 

export default App;
