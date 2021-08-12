import React, { useState } from 'react'
import EditForm from './EditForm'
import Button from "@material-ui/core/Button"
import DeleteIcon from "@material-ui/icons/Delete"
import EditIcon from "@material-ui/icons/Edit"
import FavoriteIcon from "@material-ui/icons/Favorite"


const Bookmark = (props) => {
    const [favorite, setFavorite] = useState(props.favorite)
    
    const handleFavorite = (favorite) => {
        setFavorite(prevState => !prevState)
    }



    const handleEdit= () => {
        <EditForm />
        props.editItem(props.id)
    }

    const handleDelete = () => {
       props.deleteItem(props.id)
    
    }

   

    return (
        <div className="bookmark-card" id={`bookmark-${props.id}`}>
            <h2 className="bookmark-headline">{props.headline}</h2>
                <p className="bookmark-description">{props.description}</p>
                <p className="bookmark-web-url" >{props.web_url}</p>
                <Button 
                    id={props.id}
                    onClick={handleFavorite}
                    className="favorite-button" 
                    startIcon={<FavoriteIcon/>}>
                </Button><br></br>
                <Button 
                    id={props.id}
                    size="small"
                    startIcon={<EditIcon />}
                    onClick={handleEdit}
                    className="edit-button" >
                </Button><br></br>
                <Button
                    id={props.id}
                    size="small"
                    startIcon={<DeleteIcon />}
                    onClick={handleDelete}
                    className="delete-button">
                </Button><br></br>
        </div>

    )
    // make web url clickable link 

}


    
    




    
export default Bookmark
