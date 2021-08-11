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
            setCategories(json.data)
        })

    
        
       // FETCH returns a Promise
       // Promise is an object that represents some value that will be available later
       // The data is accessed when the Promise is resolved

        // 1. component begins to get mounted to DOM
        // 2. initial render happens (empty array of categories)
        // 3. componentDidMount is called
        // 4. once request finishes, setState() is called
        // 5. bookmark property is filled with categories from backend
    }, [categories.length])

    const categoryList = categories.map(({attributes}) => {
        return <CategoryCard key={attributes.id} {...attributes}/>

    })

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = { ...this.state }
        const dataObject = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accepts": "application/json"
            },
            body: JSON.stringify(data)
        }
        fetch(`http://localhost:3000/categories`, dataObject)
        .then(response => response.json())
        .then(json => {
            this.setState({
                categories: json
            })
        })
    }

    const deleteItem = (bookmark) => {
        
    }

    return (
        <div>
            <CategoryForm onSubmit={handleSubmit}/>
            {categoryList}
        </div>
    )
}

export default Categories
