import React from "react";
import { NavLink } from "react-router-dom";
import Logout from "./Logout";
import SignUpButtons from "./SignUpButtons";

function NavBar({isLoggedIn, onLogout, signUpSelect}) {
    return(
        <div id="navbar">
            <NavLink to="/" exact>
            <button id="home-button" className="nav-button" onClick="">Home</button>
            </NavLink>

            {isLoggedIn ? <Logout onLogout={onLogout}/> : <SignUpButtons signUpSelect={signUpSelect}/>}
        


            
            
        </div>
    )
}

export default NavBar