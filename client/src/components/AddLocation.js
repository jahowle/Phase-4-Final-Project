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
                 <label className="input">Location Name
                    <input
                        type="text"
                        name="Location Name"
                        onChange={(e) => setLocation(e.target.value)}
                        value={location}
                    />
                </label>
               
                <button id="submit-button" type="submit">Submit Location</button>

            </form>


        </div>
    )
}

export default AddLocation