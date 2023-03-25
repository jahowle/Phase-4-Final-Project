import React, {useState, useContext} from "react";
import CategorySelect from "./CategorySelect";
import NeighborSelect from "./NeighborSelect";
import { useHistory } from "react-router-dom";
import { UserContext } from "../context/user";

function AddNeed({updateNeeds, categories, neighbors}) {

    const [description, setDescription] = useState("")
    const [category, setCategory] = useState(0)
    const [neighbor, setNeighbor] = useState(0)
    const [amount, setAmount] = useState(0)
    const [errors, setErrors] = useState([])

    const { user } = useContext(UserContext);

    const history = useHistory();

    function handleSubmit(e) {

        e.preventDefault()

       fetch("/needs", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            amount: amount,
            neighbor_id: neighbor,
            category_id: category,
            description: description,
            funded: false,
            user_id: user.id,
            remaining_balance: amount
        }),
    })
    .then((r) => {
        if (r.ok) {
            r.json().then((data) => {
                updateNeeds(data)
                history.push("/")
            })
        } else {
            r.json().then((errorData) => setErrors(errorData.errors))
        }
    })
}

    
    function handleCategoryChange(e) {
        setCategory(e.target.value)
    }

    function handleNeighborChange(e) {
        setNeighbor(e.target.value)
    } 

    function handleAmountChange(e) {
        setAmount(e.target.value)
    }




    return(
        <div>
            <h1>Add Need</h1>
            <form id="add-need-form" onSubmit={handleSubmit}>
                 <label className="input">Description
                    <input
                        type="text"
                        name="description"
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                    />
                </label>
                <label>Category</label>
                <CategorySelect handleCategoryChange={handleCategoryChange} categories={categories}/>
                <label>Neighbor</label>
                <NeighborSelect handleNeighborChange={handleNeighborChange} neighbors={neighbors}/>

                <label className="input">Amount
                    <input
                    type="number"
                    name="amount"
                    onChange={handleAmountChange}
                    value={amount}
                    min="1"
                    max="400"
                    />
                </label>

                <button id="submit-button" type="submit">Submit Need</button>

                {errors.length > 0 && ( 
                <p style={{ color: "red" }}>
                {errors.map((error) => (<p key={error}>{error}</p>))}
                </p>
                )}
            </form>
        </div>
    )
}

export default AddNeed