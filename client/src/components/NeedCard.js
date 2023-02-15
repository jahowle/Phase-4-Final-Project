import React from "react";

function NeedCard({id, description}) {
    return(
        <div className="need-card">
            <h3>Need Card</h3>
            <p>{description}</p>
            <p>{id}</p>
        </div>
    )
}

export default NeedCard