import React, {useState} from "react";
import CategorySelect from "./CategorySelect";

function AddNeed() {

    const [description, setDescription] = useState("")
    const [category, setCategory] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        console.log(description, category)
    }
    
    function handleCategoryChange(e) {
        setCategory(e.target.value)
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
                <CategorySelect handleCategoryChange={handleCategoryChange}/>

                <button id="submit-button" type="submit">Submit Need</button>

            </form>
        </div>
    )
}

export default AddNeed