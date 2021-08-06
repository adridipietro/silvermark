import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom' 


const Bookmark = (props) => {
    

    return (
        <div className="bookmark-card" id={`bookmark-${props.id}`} onClick={handleFavorite}>
            <h2 className="bookmark-headline">{props.headline}</h2>
                <p className="bookmark-description">{props.description}</p>
                <a href='#' className="bookmark-web-url" onClick={handleURL}>{props.web_url}</a>
                <button className="bookmark-favorite" onClick="{handleFavorite}"></button>
                <button className="edit-button" onClick={handleEdit}>Edit</button>
                <button className="delete-button" onClick={handleDelete}>Delete</button>
                <button className="show-button">Show</button>
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
