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
        <button onClick={handleLogout}>Logout</button>
        <button>
            <NavLink to="/profile" exact>
            My Profile
            </NavLink>
            </button>
        <button>
            <NavLink to="/add-need" exact>
            Add need
            </NavLink>
        </button>
        </div>
    )
}

export default Logout