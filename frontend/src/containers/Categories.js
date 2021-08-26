import React from 'react'
import { connect } from 'react-redux'
import CategoryCard from './CategoryCard'



const Categories = (props)  => {

    const renderCategoryCollection = () => {
        return props.categories.map(category => {
            return <CategoryCard key={category.id} deleteCategory={props.deleteCategory} {...category} />

        })
    }

    return (
        <div className="categories-container">
            <br></br>
            {renderCategoryCollection()}
        </div>
    )
}


const mapStateToProps = (currentState) => {
    return {
      categories: currentState.categories.categories
    }
}


export default connect(mapStateToProps, null)(Categories)