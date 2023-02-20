import React, {useState, useEffect} from "react";


function UserProfile({user, needs}) {

    const needsToDisplay = needs
   
    console.log(needsToDisplay)



    return(
        <div>
            <h1>{user.username}'s Profile</h1>
        </div>
    )
}

export default UserProfile