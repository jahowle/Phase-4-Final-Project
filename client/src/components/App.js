import '../App.css';
import { useState, useEffect } from "react";
import Login from './Login';
import Logout from './Logout';
import Signup from './Signup';
import NeedsList from './NeedsList';
import { Route, Switch } from "react-router-dom";
import UserProfile from './UserProfile';
import AddNeed from './AddNeed';

function App() {

  const [user, setUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [needs, setNeeds] = useState([])

  useEffect(() => {
    fetch("/me")
      .then((response) => {
      if (response.ok) {
        response.json().then((user) => handleLogin(user));
      }
      else {
        console.log("Auto Login: response not OK")
      }
      getNeeds()  
    });
  }, []);

  function getNeeds() {
    fetch("/needs")
      .then((r) => r.json())
      .then((data) => setNeeds(data));
  }
  

  function handleLogin(user) {
    setUser(user)
    setIsLoggedIn(true)
  }

  function handleSignup(user) {
    setUser(user)
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

        <Route exact path="/profile">
          <UserProfile user={user} needs={needs}/>
        </Route>

        <Route exact path="/add-need">
          <AddNeed />
        </Route>

        <Route exact path="/">
            <h1>Welcome to Neighborshare</h1>
            {isLoggedIn ? <h2>Hi, {user.username}</h2> : <h2>Please Signup</h2>}
            {isLoggedIn ? <Logout onLogout={onLogout}/> : <Signup onSignup={handleSignup}/>}
            <NeedsList needs={needs}/>
        </Route>

      </Switch>
      
    </div>
  );
} 

export default App;
