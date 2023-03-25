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
  const [categories, setCategories] = useState([])
  const [partners, setPartners] = useState([])
  const [locations, setLocations] = useState([])
  const [neighbors, setNeighbors] = useState([])
  

  useEffect(() => {
 
    getNeeds()
    getCategories()
    getPartners()
    getLocations()
    getNeighbors()
  }, []);

  function onDelete(id) {
    setNeeds((needs) => needs.filter((need) => need.id !== id))
  }
  

  async function getNeeds() {
    await fetch("/needs")
    .then((r) => r.json())
    .then((data) => setNeeds(data))
  }

  async function getCategories() {
    await fetch("/categories")
    .then((r) => r.json())
    .then((data) => setCategories(data))
  }

  async function getPartners() {
    await fetch("/partners")
    .then((r) => r.json())
    .then((data) => setPartners(data))
  }

  async function getLocations() {
    await fetch("/locations")
    .then((r) => r.json())
    .then((data) => setLocations(data))
  }

  async function getNeighbors() {
    await fetch("/neighbors")
    .then((r) => r.json())
    .then((data) => setNeighbors(data))
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
          <AddNeed updateNeeds={updateNeeds} categories={categories} neighbors={neighbors}/>
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
          <AddPartner locations={locations} />
        </Route>

        <Route exact path="/add-neighbor">
          <AddNeighbor partners={partners}/>
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
