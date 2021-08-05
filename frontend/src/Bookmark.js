import React from 'react'

const Bookmark = (props) => {
    return (
        <div className="bookmark-card" id={`bookmark-${props.id}`}>
            <h2 id="bookmark-headline">{props.headline}</h2>
                <li id="bookmark-description">{props.description}</li>
                <a href id="bookmark-weburl">{props.web_url}</a>
                <button className="edit-button">Edit</button>
                <button className="delete-button">Delete</button>
        </div>

    )
    // make web url clickable link 

}
    
    




    
export default Bookmark
