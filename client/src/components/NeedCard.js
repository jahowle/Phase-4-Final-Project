import React from "react";

function NeedCard({id, description, neighbor, remainingBalance, category, auth, onDelete}) {

    function handleDelete() {
        fetch(`needs/${id}`, {
            method: "DELETE",
        })
        .then((r) => {
            if (r.ok) {
              onDelete(id);
            }
          })
    }


    return(
        <div className="need-card">
            <h3>{neighbor}</h3>
            <h4>{remainingBalance}</h4>
            <h4>{category}</h4>
            <p>{description}</p>
            <p>{id}</p>
            {auth ? <button onClick={handleDelete}>Delete</button> : ""}
        </div>
    )
}

export default NeedCard