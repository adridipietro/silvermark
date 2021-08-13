import React, { useState, useEffect } from 'react'
import CategoryForm from './CategoryForm'
import CategoryCard from './CategoryCard'

const Categories = (props)  => {
    const [categories, setCategories] = useState([])
    // [name of the object, name of the function used to set state of this object] = sets initial value of the state 

    useEffect(() => {
        // get all categories from api
        // update categories in the state
        fetch(`http://localhost:3000/categories`)
        .then(response => response.json())
        .then(json => {
            setCategories(json)
        })

    
        
       // FETCH returns a Promise
       // Promise is an object that represents some value that will be available later
       // The data is accessed when the Promise is resolved

        // 1. component begins to get mounted to DOM
        // 2. initial render happens (empty array of categories)
        // 3. useEffect() is called
        // 4. once request finishes, setCategories() is called
        // 5. bookmark property is filled with categories from backend
    }, [])

    const handleCreate = (createdCategory) => {
        let _categories = [...categories]
        _categories.unshift(createdCategory)
        //unshift adds to beginning
        setCategories(_categories)
            // updating the key "categories" with the createdCategory
        // existing state, adding newly created category and updating the state
    }
    

    const deleteCategory = (id) => {
        fetch(`http://localhost:3000/categories/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": 'application/json',
                "Accepts": 'application/json'
            }
        })
        .then(() => {
            let _categories = [categories]
            var index = _categories.indexOf(id)
            _categories.splice(index, 1)
            // splice: removing 1 element
            alert("Succesfully Deleted")
            setCategories(_categories)
        })
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
