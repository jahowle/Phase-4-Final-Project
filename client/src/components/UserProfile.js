import React from "react";
import NeedsList from "./NeedsList";


function UserProfile({user, needs}) {

    const needsToDisplay = needs.filter((need) => need.user_id === user.id)

    console.log(needsToDisplay)


    return(
        <div>
            <h1>{user.username}'s Profile</h1>
            <NeedsList needs={needsToDisplay}/>
        </div>
    )
}

export default UserProfile