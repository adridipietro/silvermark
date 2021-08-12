import React from 'react'
import Button from "@material-ui/core/Button"
import DeleteIcon from "@material-ui/icons/Delete"

export default function CategoryCard(props) {


    const handleDelete = (e) => {
        props.deleteCategory(props.category)
    
    }


    return (
        <div className="category-card" id={`category-${props.id}`}>
            <h2 className="category-name">{props.name}</h2>
                <ul>
                    bookmarks go here
                </ul>
                <Button
                    id={props.id}
                    variant="contained"
                    color="secondary"
                    size="small"
                    startIcon={<DeleteIcon />}
                    onClick={handleDelete}
                    className="delete-button">
                </Button><br></br>
                  
        </div>

    )
            
 
}
