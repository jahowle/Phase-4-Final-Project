import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import LocationSelect from "./LocationSelect";

function AddPartner({locations}) {

    const [partner, setPartner] = useState("")
    const [location, setLocation] = useState(null)
    const [errors, setErrors] = useState([])
    const history = useHistory();

    function handleSubmit(e) {
        e.preventDefault()
        
        fetch("/partners", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: partner,
                location_id: location
               
            }),
        })
        .then((r) => {
            if (r.ok) {
                r.json().then((data) => {
                    history.push("/")
                })
            } else {
                r.json().then((errorData) => setErrors(errorData.errors))
            }
        })
        }

        function handleLocationChange(e) {
            setLocation(e.target.value)
        } 

    return(
        <div>
            <h1>Add A Partner Organization</h1>


            <form id="add-partner-form" onSubmit={handleSubmit}>
                 <label className="input">Partner Name
                    <input
                        type="text"
                        name="Partner Name"
                        onChange={(e) => setPartner(e.target.value)}
                        value={partner}
                    />
                </label>

                <LocationSelect handleLocationChange={handleLocationChange} locations={locations}/>

               
                <button id="submit-button" type="submit">Submit Partner Organization</button>

                {errors.length > 0 && ( 
                <p style={{ color: "red" }}>
                {errors.map((error) => (<p key={error}>{error}</p>))}
                </p>
                )}

            </form>


        </div>
    )
}

export default AddPartner