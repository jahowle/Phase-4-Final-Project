import React, {useState} from "react";
import { useHistory } from "react-router-dom";

function AddCategory() {

    const [category, setCategory] = useState("")
    const history = useHistory();

    function handleSubmit(e) {
        e.preventDefault()
        
        fetch("/categories", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: category,
               
            }),
        })
        .then((r) => r.json())
        .then((data) => {
            history.push("/");
        })
    
        }

    return(
        <div>
            <h1>Add A Category</h1>


            <form id="add-category-form" onSubmit={handleSubmit}>
                 <label className="input">Description
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