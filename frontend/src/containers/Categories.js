import React from 'react'
import CategoryForm from '../components/CategoryForm'
import CategoryCard from './CategoryCard'
import PropTypes  from 'prop-types'

const Categories = (props)  => {

    
    const renderCategoryCollection = () => {
        return props.categories.map(category => {
            return <CategoryCard key={category.id} {...category} />
    
        })
    }

    return (
        <div className="categories-container">
            <br></br>
            <CategoryForm />
            <br></br>
            {renderCategoryCollection()}
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
