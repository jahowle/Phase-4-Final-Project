import React from "react";
import NeedCard from "./NeedCard";

function NeedsList({needs}) {

    const needsToDisplay = needs.map((need) => {
        return <NeedCard key={need.id} id={need.id} description={need.description} />
    })

    return(
        <div>

            {needsToDisplay}
        </div>
    )
}

export default NeedsList