import React from 'react'
import PropTypes  from 'prop-types'


const CategoryFilter = (props) => {
    
    const renderCategoriesForSelect = (categories) => {
        return props.categories.map(category => {
           return <option key={category.id} value={category.name}>{category.name}</option>
        })
    } 


    const handleChange = () => {
        console.log('hi')
    }

    return (
        <div className="category-select">
            <select className="select-input" placeholder="FILTER" label="FILTER" onChange={handleChange}>
                {renderCategoriesForSelect()}
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
