import React from 'react'
import CategoryForm from '../components/CategoryForm'
import CategoryCard from './CategoryCard'
import PropTypes  from 'prop-types'
import CategoryFilter from '../components/CategoryFilter'

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
            <CategoryFilter/>
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
