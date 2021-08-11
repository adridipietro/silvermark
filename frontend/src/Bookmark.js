import React from 'react'
import EditForm from './EditForm'
import Button from "@material-ui/core/Button"
import DeleteIcon from "@material-ui/icons/Delete"
import EditIcon from "@material-ui/icons/Edit"
import FavoriteIcon from "@material-ui/icons/Favorite"


function Bookmark(props) {
    const handleEdit= (e) => {
        console.log('edit')
    }

    const handleDelete = (e) => {
        props.deleteItem(props.bookmark)
    
    }

    const handleFavorite= (e) => {
        console.log('favorite')
    }


    return (
        <div className="bookmark-card" id={`bookmark-${props.id}`}>
            <h2 className="bookmark-headline">{props.headline}</h2>
                <p className="bookmark-description">{props.description}</p>
                <p className="bookmark-web-url" >{props.web_url}</p>
                <Button 
                    variant="contained"
                    color="secondary"
                    size="small"
                    startIcon={<FavoriteIcon />}
                    onClick={handleFavorite}
                    className="favorite-button" >
                </Button>
                <Button 
                    variant="contained"
                    color="secondary"
                    size="small"
                    startIcon={<EditIcon />}
                    onClick={handleEdit}
                    className="edit-button" >
                </Button>
                <Button
                    variant="contained"
                    color="secondary"
                    size="small"
                    startIcon={<DeleteIcon />}
                    onClick={handleDelete}
                    className="delete-button">
                </Button>
        </div>

    )
    // make web url clickable link 

}

Bookmark.defaultProps = {
    headline: 'Unknown',
    description: '',
    web_url: 'Unknown',
    favorite: false, 
    keywords: []
}
    
    




    
export default Bookmark
