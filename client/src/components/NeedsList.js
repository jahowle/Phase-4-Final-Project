import React from "react";
import NeedCard from "./NeedCard";

function NeedsList({needs}) {

    const needsToDisplay = needs.map((need) => {
        return <NeedCard key={need.id} id={need.id} description={need.description} neighbor={need.neighbor.name} category={need.category.name} remainingBalance={need.remaining_balance} />
    })

    return(
        <div>

            {needsToDisplay}
        </div>
    )
}

export default NeedsList