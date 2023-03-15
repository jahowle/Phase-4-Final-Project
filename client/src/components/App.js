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
import AddLocation from './AddLocation'
import AddPartner from './AddPartner';
import AddNeighbor from './AddNeighbor';

function App() {
  const [needs, setNeeds] = useState([])
  

  useEffect(() => {
 
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
  


  return (
    <div className="App">

      <NavBar />

      <Switch>
      <Route exact path="/login">
          <Login />
        </Route>

        <Route exact path="/profile">
          <UserProfile needs={needs} onDelete={onDelete}/>
        </Route>

        <Route exact path="/add-need">
          <AddNeed updateNeeds={updateNeeds}/>
        </Route>

        <Route exact path="/partner-signup">
          <Signup />
        </Route>

        <Route exact path="/add-category">
          <AddCategory />
        </Route>

        <Route exact path="/add-location">
          <AddLocation />
        </Route>

        <Route exact path="/add-partner">
          <AddPartner />
        </Route>

        <Route exact path="/add-neighbor">
          <AddNeighbor />
        </Route>
        



      

        <Route exact path="/">
            <h1>Welcome to Neighborshare</h1>
            <NeedsList needs={needs} onDelete={onDelete} mine={false}/>
        </Route>

      </Switch>
      
    </div>
  );
} 

export default App;
