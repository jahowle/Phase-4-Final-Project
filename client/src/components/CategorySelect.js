import React, {useEffect, useState} from "react";
import CategoryOption from "./CategoryOption";

function CategorySelect({handleCategoryChange, formData}) {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch("/categories")
          .then((r) => r.json())
          .then((data) => setCategories(data));
      }, []);

    const categoryOptions = categories.map((category) => {
        return <CategoryOption key={category.id} categoryId={category.id} categoryName={category.name}/>
    })

    return(
        <select name="category" onChange={handleCategoryChange} >
            <option value="">--Please choose a Category-</option>
            {categoryOptions}
        </select>
       
    )
}

export default CategorySelect