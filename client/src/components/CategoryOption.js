import React from "react";

function CategoryOption({categoryId, categoryName}) {

    return(
        <option value={categoryId}>{categoryName}</option>
    )

}

export default CategoryOption