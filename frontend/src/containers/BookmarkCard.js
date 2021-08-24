import React from 'react'
import Button from "@material-ui/core/Button"
import DeleteIcon from "@material-ui/icons/Delete"
import FavoriteIcon from "@material-ui/icons/Favorite"
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { deleteBookmark, favoriteBookmark } from '../actions/index'


const BookmarkCard = (props) => {
    const history = useHistory()


    const handleFavorite = () => {
        favoriteBookmark()
        history.push('/bookmarks')
    }

    const handleDelete = () => {
       deleteBookmark()
       history.push('/bookmarks')
    
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
                    startIcon={<DeleteIcon />}
                    onClick={handleDelete}
                    className="delete-button">
                </Button><br></br>
        </div>

    )
}


    
const mapDispatchToProps = (dispatch) => {
    return {
      deleteBookmark: (id) => dispatch(deleteBookmark(id)),
      favoriteBookmark: (id) => dispatch(favoriteBookmark(id))
    }
}
  
export default connect(null, mapDispatchToProps)(BookmarkCard)
