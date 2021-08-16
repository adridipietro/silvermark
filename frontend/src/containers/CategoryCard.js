import React from 'react'
import Button from "@material-ui/core/Button"
import DeleteIcon from "@material-ui/icons/Delete"
import { deleteCategory } from '../actions/index'

const CategoryCard = (props) => {


    const handleDelete = () => {
        deleteCategory(props.id)
    
    }


    return (
        <div className="category-card" id={`category-${props.id}`}>
            <h2 className="category-name">{props.name}</h2>
                <ul className="category-bookmark-list">
                    {props.bookmarks.map(bookmark => 
                        <p key={bookmark.id}>{bookmark.headline}</p>
                    )}
                </ul>
                <Button
                    id={props.id}
                    startIcon={<DeleteIcon />}
                    onClick={handleDelete()}
                    className="delete-button">
                </Button><br></br>
                  
        </div>

    )
            
}

export default CategoryCard