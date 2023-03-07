import React from "react";
import { NavLink } from "react-router-dom";

function SignUpButtons({signUpSelect}) {

    function handlePartnerSignUp(){
        signUpSelect("Partner")
    }

    return(
        <div>
            <button className="nav-button" onClick={handlePartnerSignUp}>
            <NavLink to="/partner-signup" exact>
                Partner SignUp
            </NavLink>
            </button>
        </div>
    )
}

export default SignUpButtons