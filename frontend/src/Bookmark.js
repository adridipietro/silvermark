import React from 'react'
import EditForm from './EditForm'
import Button from "@material-ui/core/Button"
import DeleteIcon from "@material-ui/icons/Delete"
import EditIcon from "@material-ui/icons/Edit"
import FavoriteIcon from "@material-ui/icons/Favorite"


function Bookmark(props) {
    const handleEdit= () => {
        <EditForm />
        props.editItem(props.id)
    }

    const handleDelete = () => {
        debugger
       props.deleteItem(props.id)
    
    }

    const handleFavorite= () => {
        props.handleFavorite(props.id)
    }


    return (
        <div className="bookmark-card" id={`bookmark-${props.id}`}>
            <h2 className="bookmark-headline">{props.headline}</h2>
                <p className="bookmark-description">{props.description}</p>
                <p className="bookmark-web-url" >{props.web_url}</p>
                <Button 
                    id={props.id}
                    variant="contained"
                    color="secondary"
                    size="small"
                    startIcon={<FavoriteIcon />}
                    onClick={handleFavorite}
                    className="favorite-button" >
                </Button><br></br>
                <Button 
                    id={props.id}
                    variant="contained"
                    color="secondary"
                    size="small"
                    startIcon={<EditIcon />}
                    onClick={handleEdit}
                    className="edit-button" >
                </Button><br></br>
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
    // make web url clickable link 

}

Bookmark.defaultProps = {
    headline: 'Unknown',
    description: 'Unknown',
    web_url: 'Unknown',
    favorite: false
}
    
    




    
export default Bookmark
