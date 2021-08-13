import React from 'react'
import CategoryForm from './CategoryForm'
import CategoryCard from './CategoryCard'
import PropTypes  from 'prop-types'

const Categories = ({ categories })  => {
    //const [categories, setCategories] = useState([])
    // [name of the object, name of the function used to set state of this object] = sets initial value of the state 


    const handleCreate = (createdCategory) => {
        let _categories = [...categories]
        _categories.unshift(createdCategory)
        return _categories
        //unshift adds to beginning
       // setCategories(_categories)
        
       // updating the key "categories" with the createdCategory
        // existing state, adding newly created category and updating the state
    }
    

    
    const categoryList = categories.map(category => {
        return <CategoryCard key={category.id} {...category} />

    })

    return (
        <div className="categories-container">
            <br></br>
            <CategoryForm  handleCreate={handleCreate}/>
            <br></br>
            {categoryList}
        </div>
    )
}

Categories.propTypes = {
    categories: PropTypes.array
}

Categories.defaultProps = {
    categories: []
}

export default Categories
