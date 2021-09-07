import React, { useState, useEffect } from 'react'
import Button from "@material-ui/core/Button"
import DeleteIcon from "@material-ui/icons/Delete"
import FavoriteIcon from "@material-ui/icons/Favorite"
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { deleteBookmark, favoriteBookmark } from '../actions/index'
import { Link } from 'react-router-dom'
import { PropTypes } from 'prop-types'


const BookmarkCard = (props) => {

    //const count = 0

    const history = useHistory()
    const [selected, setSelected] = useState(false)
    const [count, setCount] = useState(0)

    useEffect(() => {
        setSelected(JSON.parse(window.localStorage.getItem("favorite")))
    }, [])


    const handleFavorite = () => {
        props.favoriteBookmark(props.id)
        setSelected(!selected)
        //history.push('/bookmarks')
        setCount(count + 1)
    }

    const handleDelete = () => {
       props.deleteBookmark(props.id)
       document.querySelector(`#bookmark-${props.id}`).remove()
       history.push('/bookmarks')
    
    }

    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
      }

   

    return (
        <div className="bookmark-card" id={`bookmark-${props.id}`}>
            <h2 className="bookmark-headline">{props.headline}</h2>
                <p className="bookmark-description">{props.description}</p>
                <Link to='#' className="bookmark-web-url" onClick={() => openInNewTab("http://" + `${props.web_url}`)}>{props.web_url}</Link>
                <Button 
                    value={selected}
                    selected={selected}
                    id={props.id}
                    onClick={handleFavorite}
                    className="favorite-button" 
                    startIcon={<FavoriteIcon/>}
                    defaultValue={props.favorite}
                    >
                </Button><br></br>
                <Button
                    id={props.id}
                    size="small"
                    startIcon={<DeleteIcon />}
                    onClick={handleDelete}
                    className="delete-button">
                </Button><br></br>
                <div className="up-vote-container">
                    <p className="up-vote">{count}</p>
                </div>
        </div>

    )
}

BookmarkCard.propTypes = {
    favorite: PropTypes.bool
}
  
BookmarkCard.defaultProps = {
    favorite: false
}

    
const mapDispatchToProps = (dispatch) => {
    return {
      deleteBookmark: (id) => dispatch(deleteBookmark(id)),
      favoriteBookmark: (id) => dispatch(favoriteBookmark(id))
    }
}
  
export default connect(null, mapDispatchToProps)(BookmarkCard)
