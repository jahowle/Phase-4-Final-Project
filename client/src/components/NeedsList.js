import React from "react";
import NeedCard from "./NeedCard";

function NeedsList({needs, auth, onDelete, user}) {

    const needsToDisplay = needs.map((need) => {
        return <NeedCard 
        key={need.id} 
        id={need.id} 
        description={need.description} 
        neighbor={need.neighbor.name} 
        category={need.category.name} 
        remainingBalance={need.remaining_balance} 
        auth={auth} 
        onDelete={onDelete} 
        userId={user.id} 
        />
    })

    return(
        <div>

            {needsToDisplay}
        </div>
    )
}

export default NeedsList