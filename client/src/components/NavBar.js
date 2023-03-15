import React, {useContext} from "react";
import { NavLink } from "react-router-dom";
import Logout from "./Logout";
import SignUpButtons from "./SignUpButtons";
import { UserContext } from "../context/user";

function NavBar() {

    const { user, onLogout, isLoggedIn} = useContext(UserContext);

    return(
        <div id="navbar">

            {isLoggedIn ? <h4 id="welcome-message">Welcome, {user.username}</h4> : ""}
            <NavLink to="/" exact>
            <button id="home-button" className="nav-button" onClick="">Home</button>
            </NavLink>

            {isLoggedIn ? <Logout onLogout={onLogout}/> : <SignUpButtons />}

        


            
            
        </div>
    )
}

export default NavBar