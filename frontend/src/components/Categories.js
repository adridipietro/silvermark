import React, { useState, useEffect } from 'react'
import CategoryForm from './CategoryForm'
import CategoryCard from './CategoryCard'

const Categories = (props)  => {
    const [categories, setCategories] = useState([])
    // [name of the object, name of the function used to set state of this object] = sets initial value of the state 


    const handleCreate = (createdCategory) => {
        let _categories = [...categories]
        _categories.unshift(createdCategory)
        //unshift adds to beginning
        setCategories(_categories)
            // updating the key "categories" with the createdCategory
        // existing state, adding newly created category and updating the state
    }
    

    
    const categoryList = categories.map(category => {
        return <CategoryCard key={category.id} {...category} deleteCategory={deleteCategory}/>

    })

    return (
        <div>
            <CategoryForm  handleCreate={handleCreate}/>
            {categoryList}
        </div>
    )
}

export default Categories
