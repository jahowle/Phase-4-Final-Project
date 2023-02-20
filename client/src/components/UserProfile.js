import React, {useState, useEffect} from "react";


function UserProfile({user, needs}) {

    console.log(user, needs)



    return(
        <div>
            <h1>{user.username}'s Profile</h1>
        </div>
    )
}

export default UserProfile