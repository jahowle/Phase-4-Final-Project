import React from "react";


function UserProfile({user, needs}) {

    console.log(needs)


    return(
        <div>
            <h1>{user.username}'s Profile</h1>
        </div>
    )
}

export default UserProfile