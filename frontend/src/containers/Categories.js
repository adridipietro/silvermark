import React from 'react'
import CategoryForm from '../components/CategoryForm'
import CategoryCard from './CategoryCard'
import PropTypes  from 'prop-types'

const Categories = ({ categories })  => {
    //const [categories, setCategories] = useState([])
    // [name of the object, name of the function used to set state of this object] = sets initial value of the state 


   
    

    
    const categoryList = categories.map(category => {
        return <CategoryCard key={category.id} {...category} />

    })

    return (
        <div className="categories-container">
            <br></br>
            <CategoryForm />
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
