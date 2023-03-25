import React, {useContext} from "react";
import NeedsList from "./NeedsList";
import { UserContext } from "../context/user";


function UserProfile({needs, onDelete}) {

    const { user } = useContext(UserContext);


    const needsToDisplay = needs.filter((need) => need.user_id === user.id)
    

    return(
        <div>
            <h1>{user.username}'s Profile</h1>
            {/* <h2>Partner: {userPartner}</h2> */}
            <NeedsList needs={needsToDisplay} auth={true} mine={true} onDelete={onDelete} user={user} />
        </div>
    )
}

export default UserProfile