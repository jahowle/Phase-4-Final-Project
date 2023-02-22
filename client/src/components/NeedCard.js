import React from "react";

function NeedCard({id, description, neighbor, remainingBalance, category, auth}) {
    return(
        <div className="need-card">
            <h3>{neighbor}</h3>
            <h4>{remainingBalance}</h4>
            <h4>{category}</h4>
            <p>{description}</p>
            <p>{id}</p>
            {auth ? <button>Delete</button> : ""}
        </div>
    )
}

export default NeedCard