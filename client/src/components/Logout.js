import React from "react";
import { NavLink } from "react-router-dom";

function Logout({onLogout}) {

    function handleLogout() {
        fetch("/logout", {
            method: "DELETE",
          }).then(() => onLogout());
      }

    return(
        <div>
        <button className="nav-button" onClick={handleLogout}>Logout</button>
        <button className="nav-button">
            <NavLink to="/profile" exact>
            My Profile
            </NavLink>
            </button>
        <button className="nav-button">
            <NavLink to="/add-need" exact>
            Add need
            </NavLink>
        </button>

        <button className="nav-button">
            <NavLink to="/add-category">
            Add Category
            </NavLink>
            
        </button>

        <button className="nav-button">
            Add Location
        </button>

        <button className="nav-button">
            Add Neighbor
        </button>
        </div>
    )
}

export default Logout