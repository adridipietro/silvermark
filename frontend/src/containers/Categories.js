import React from 'react'
import CategoryForm from '../components/CategoryForm'
import CategoryCard from './CategoryCard'



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



export default Categories
