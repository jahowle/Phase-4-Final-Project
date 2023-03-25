import React, {useState} from "react";
import { useHistory } from "react-router-dom";

function AddLocation({updateLocations}) {

    const [location, setLocation] = useState("")
    const [errors, setErrors] = useState([])
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
        .then((r) => {
            if (r.ok) {
                r.json().then((data) => {
                    updateLocations(data)
                    history.push("/")
                })
            } else {
                r.json().then((errorData) => setErrors(errorData.errors))
            }
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

                {errors.length > 0 && ( 
                <p style={{ color: "red" }}>
                {errors.map((error) => (<p key={error}>{error}</p>))}
                </p>
                )}

            </form>


        </div>
    )
}

export default AddLocation