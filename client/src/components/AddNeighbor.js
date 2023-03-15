import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import LocationSelect from "./LocationSelect";
import PartnerSelect from "./PartnerSelect";

function AddNeighbor() {

    const [neighbor, setNeighbor] = useState("")
    const [partner, setPartner] = useState(null)
    const [bio, setBio] = useState("")
    const [errors, setErrors] = useState([])
    const history = useHistory();

    function handleSubmit(e) {
        e.preventDefault()
        
        fetch("/neighbors", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: neighbor,
                partner_id: partner,
                bio: bio
               
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

        function handlePartnerChange(e) {
            setPartner(e.target.value)
        } 

    return(
        <div>
            <h1>Add A neighbor Organization</h1>


            <form id="add-neighbor-form" onSubmit={handleSubmit}>
                 <label className="input">Neighbor Name
                    <input
                        type="text"
                        name="Neighbor Name"
                        onChange={(e) => setNeighbor(e.target.value)}
                        value={neighbor}
                    />
                </label>

                <label className="input">Bio
                    <input
                        type="text"
                        name="Bio"
                        onChange={(e) => setBio(e.target.value)}
                        value={bio}
                    />
                </label>

                <PartnerSelect handlePartnerChange={handlePartnerChange} />

               
                <button id="submit-button" type="submit">Submit Neighbor</button>

                {errors.length > 0 && ( 
                <p style={{ color: "red" }}>
                {errors.map((error) => (<p key={error}>{error}</p>))}
                </p>
                )}

            </form>


        </div>
    )
}

export default AddNeighbor