import React, {useContext} from "react";
import NeedCard from "./NeedCard";
import { UserContext } from "../context/user";

function NeedsList({needs, onDelete, mine}) {

    const { user, isLoggedIn } = useContext(UserContext);

    const filteredNeeds = needs.filter((need) => need.funded === false)

    const needsToDisplay = filteredNeeds.map((need) => {
        return <NeedCard 
        key={need.id} 
        id={need.id} 
        description={need.description} 
        neighbor={need.neighbor.name} 
        category={need.category.name} 
        remainingBalance={need.remaining_balance} 
        auth={isLoggedIn} 
        mine={mine}
        onDelete={onDelete} 
        userId={user.id} 
        />
    })

    return(
        <div id="needs-list">
            {needsToDisplay}
        </div>
    )
}

export default NeedsList