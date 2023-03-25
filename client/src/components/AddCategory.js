import React, {useState} from "react";
import { useHistory } from "react-router-dom";

function AddCategory({updateCategories}) {

    const [category, setCategory] = useState("")
    const [errors, setErrors] = useState([])
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
        .then((r) => {
            if (r.ok) {
                r.json().then((data) => {
                    updateCategories(data)
                    history.push("/");
                })
            } else {
                r.json().then((errorData) => setErrors(errorData.errors))
            }
        
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

                {errors.length > 0 && ( 
                <p style={{ color: "red" }}>
                {errors.map((error) => (<p key={error}>{error}</p>))}
                </p>
                )}

            </form>


        </div>
    )
}

export default AddCategory