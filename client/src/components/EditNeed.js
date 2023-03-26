import React from "react";
import { useParams } from "react-router-dom";

function EditNeed({needs}) {

    const params = useParams()

    console.log(params.id)

    const need = needs.filter((need) => need.id === parseInt(params.id))

    console.log(need[0])

    
        return(
            <div>
                <h1>Edit Need</h1>
                <h2>{need[0].description}</h2>
            </div>
        )
}

export default EditNeed