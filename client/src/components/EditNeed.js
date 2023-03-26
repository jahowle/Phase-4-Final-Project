import React, {useEffect, useState} from "react";
import { useParams, useHistory } from "react-router-dom";


function EditNeed({updateNeedDescription}) {

    const [errors, setErrors] = useState([])
    const [description, setDescription] = useState("")
    const params = useParams()
    const history = useHistory()

    useEffect(() => {
        fetch(`/needs/${params.id}`)
        .then((r) => r.json())
        .then((data) => {
            setDescription(data.description)
        })
    }, [])
    

    function handleSubmit(e) {
        e.preventDefault()

    fetch(`/edit-need/${params.id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            description: description
        }),
    })
    .then((r) => {
        if (r.ok) {
            r.json().then((data) => {
                updateNeedDescription(data)
                history.push("/profile")
            })
        } else {
            r.json().then((errorData) => setErrors(errorData.errors))
        }
    })
}

    
        return(
            <div>
                <h1>Edit Need</h1>
                <form onSubmit={handleSubmit}>
                    <label>Description</label>
                    <input type="text" name="description" value={description} onChange={(e) => setDescription(e.target.value)}/>
                    <button id="submit-button" type="submit" >Save</button>
                </form>
            </div>
        )
}

export default EditNeed