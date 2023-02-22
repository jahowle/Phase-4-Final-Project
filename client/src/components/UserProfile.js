import { useState, useEffect } from "react";
import NeedsList from "./NeedsList";


function UserProfile({user, needs, onDelete}) {

    const needsToDisplay = needs.filter((need) => need.user_id === user.id)

    return(
        <div>
            <h1>{user.username}'s Profile</h1>
            <NeedsList needs={needsToDisplay} auth={true} onDelete={onDelete} />
        </div>
    )
}

export default UserProfile