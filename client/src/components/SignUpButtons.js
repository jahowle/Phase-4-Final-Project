import React from "react";
import { NavLink } from "react-router-dom";

function SignUpButtons({signUpSelect}) {

    function handlePartnerSignUp(){
        signUpSelect("Partner")
    }

    function handleDonorSignUp(){
        signUpSelect("Donor")
    }


    return(
        <div>
            <button onClick={handlePartnerSignUp}>
            <NavLink to="/partner-signup" exact>
                Partner SignUp
            </NavLink>
            </button>
            <button onClick={handleDonorSignUp}>Donor SignUp</button>
        </div>
    )
}

export default SignUpButtons