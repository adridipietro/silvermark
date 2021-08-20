import React from 'react'
import PropTypes  from 'prop-types'
import { filterByCategory } from '../actions/index'


const CategoryFilter = (props) => {
    
    const renderCategoriesForSelect = () => {
        return props.categories.map(category => {
           return <option key={category.id} value={category.name}>{category.name}</option>
        })
    } 


    const handleChange = () => {
        const { categories } = this.props
        filterByCategory({categories})
    }

    return (
        <div className="category-select">
            <select className="select-input" placeholder="FILTER" label="FILTER" onChange={handleChange}>
                {renderCategoriesForSelect}
            </select>
        </div>
    )
}

CategoryFilter.propTypes = {
    categories: PropTypes.array
}

CategoryFilter.defaultProps = {
    categories: []
}



export default CategoryFilter
