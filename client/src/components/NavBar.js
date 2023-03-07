import React from "react";
import { NavLink } from "react-router-dom";
import Logout from "./Logout";
import SignUpButtons from "./SignUpButtons";

function NavBar({isLoggedIn, onLogout, signUpSelect, user}) {
    return(
        <div id="navbar">

            {isLoggedIn ? <h4 id="welcome-message">Welcome, {user.username}</h4> : ""}
            <NavLink to="/" exact>
            <button id="home-button" className="nav-button" onClick="">Home</button>
            </NavLink>

            {isLoggedIn ? <Logout onLogout={onLogout}/> : <SignUpButtons signUpSelect={signUpSelect}/>}

        


            
            
        </div>
    )
}

export default NavBar