import React, {useState} from "react";
import { useHistory } from "react-router-dom";

function AddLocation() {

    const [location, setLocation] = useState("")
    const history = useHistory();

    function handleSubmit(e) {
        e.preventDefault()
        
        fetch("/locations", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: location,
               
            }),
        })
        .then((r) => r.json())
        .then((data) => {
            history.push("/");
        })
    
        }

    return(
        <div>
            <h1>Add A Location</h1>


            <form id="add-location-form" onSubmit={handleSubmit}>
                 <label className="input">Location name
                    <input
                        type="text"
                        name="Category Name"
                        onChange={(e) => setCategory(e.target.value)}
                        value={category}
                    />
                </label>
               
                <button id="submit-button" type="submit">Submit Category</button>

            </form>


        </div>
    )
}

export default AddCategory