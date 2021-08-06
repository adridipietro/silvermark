import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom' 

const Bookmark = (props) => {
    const [bookmark, setBookmark ] = useState({})
    // declaring two variables and assigning it to useState empty object



    useEffect(() => {
        //making an api request
        const url = props.id
        console.log(props)
    }, [])


    const handleEdit = (e) => {
        if (e.target.innerText === 'Edit'){

        }
    }

    const handleDelete = (e) => {
        if (e.target.innerText === 'Delete'){
            
        }
    }


    const handleURL = (e) => {
        
    }

    const handleFavorite = (e) => {

    }

    return (
        <div className="bookmark-card" id={`bookmark-${props.id}`} onClick={handleFavorite}>
            <h2 className="bookmark-headline">{props.headline}</h2>
                <p className="bookmark-description">{props.description}</p>
                <a href='#' className="bookmark-web-url" onClick={handleURL}>{props.web_url}</a>
                <p className="bookmark-favorite" onClick="{handleFavorite}">$$</p>
                <button className="edit-button" onClick={handleEdit}>Edit</button>
                <button className="delete-button" onClick={handleDelete}>Delete</button>
                <button className="show-button">Show</button>
        </div>

    )
    // make web url clickable link 

}
    
    




    
export default Bookmark
