import React from 'react'


const Bookmark = (props) => {

    

    return (
        <div className="bookmark-card" id={`bookmark-${props.id}`}>
            <h2 className="bookmark-headline">{props.headline}</h2>
                <p className="bookmark-description">{props.description}</p>
                <a href='#' className="bookmark-web-url" >{props.web_url}</a>
                <button className="bookmark-favorite" >Favorite</button>
                <button className="edit-button" >Edit</button>
                <button className="delete-button" >Delete</button>
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
