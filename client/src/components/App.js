import '../App.css';
import { useState, useEffect } from "react";
import Login from './Login';
import Logout from './Logout';
import Signup from './Signup';
import NeedsList from './NeedsList';
import { Route, Switch } from "react-router-dom";

function App() {

  const [user, setUser] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [needs, setNeeds] = useState([])

  useEffect(() => {
    fetch("/me")
      .then((response) => {
      if (response.ok) {
        response.json().then((user) => handleLogin(user));
        getNeeds()
      }
      else {
        console.log("Auto Login: response not OK")
      }
    });
  }, []);

  function getNeeds() {
    fetch("/needs")
      .then((r) => r.json())
      .then((data) => setNeeds(data));
  }
  

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
      <Switch>
      <Route exact path="/login">
          <Login onLogin={handleLogin}/>
        </Route>

        <Route exact path="/">
            <h1>Welcome to Neighborshare</h1>
            {isLoggedIn ? <h2>{user}</h2> : <h2>Please Signup</h2>}
            {isLoggedIn ? <Logout onLogout={onLogout}/> : <Signup onSignup={handleSignup}/>}
            <NeedsList needs={needs}/>
        </Route>

      </Switch>
      
    </div>
  );
} 

export default App;
