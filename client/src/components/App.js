import '../App.css';
import { useState, useEffect } from "react";
import Login from './Login';
import Signup from './Signup';
import NeedsList from './NeedsList';
import { Route, Switch } from "react-router-dom";
import UserProfile from './UserProfile';
import AddNeed from './AddNeed';
import NavBar from './NavBar';
import AddCategory from './AddCategory';

function App() {

  const [user, setUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [needs, setNeeds] = useState([])
  const [signUp, setSignUp] = useState(null)
  

  useEffect(() => {
    fetch("/me")
      .then((response) => {
      if (response.ok) {
        response.json().then((user) => handleLogin(user));
      }
      else {
        console.log("Auto Login: response not OK")
      }
    })
    
    getNeeds()
  }, []);

  function onDelete(id) {
    setNeeds((needs) => needs.filter((need) => need.id !== id))
  }

  async function getNeeds() {
    await fetch("/needs")
    .then((r) => r.json())
    .then((data) => setNeeds(data))
  }

  function updateNeeds(need) {
    console.log(need)
    setNeeds([...needs, need])
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

  function signUpSelect(role) {
    setSignUp(role)
  }


  return (
    <div className="App">

      <NavBar isLoggedIn={isLoggedIn} onLogout={onLogout} signUpSelect={signUpSelect} user={user}/>

      <Switch>
      <Route exact path="/login">
          <Login onLogin={handleLogin}/>
        </Route>

        <Route exact path="/profile">
          <UserProfile user={user} needs={needs} onDelete={onDelete}/>
        </Route>

        <Route exact path="/add-need">
          <AddNeed user={user} updateNeeds={updateNeeds}/>
        </Route>

        <Route exact path="/partner-signup">
          <Signup onSignup={handleSignup}/>
        </Route>

        <Route exact path="/add-category">
          <AddCategory />
        </Route>

        <Route exact path="/">
            <h1>Welcome to Neighborshare</h1>
            <NeedsList needs={needs} user={user}/>
        </Route>

      </Switch>
      
    </div>
  );
} 

export default App;
