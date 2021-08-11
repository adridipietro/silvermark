import React from 'react'
import EditForm from './EditForm'
import { Grid } from '@material-ui/core'


function Bookmark(props) {
    const handleEdit= (e) => {
        console.log('edit')
    }

    const handleDelete = (e) => {
        console.log('delete')
    }


    return (
        <div className="bookmark-card" id={`bookmark-${props.id}`}>
            <h2 className="bookmark-headline">{props.headline}</h2>
                <p className="bookmark-description">{props.description}</p>
                <p className="bookmark-web-url" >{props.web_url}</p>
                <button className="bookmark-favorite" >Favorite</button>
                <button className="edit-button"onClick={handleEdit}>Edit</button>
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
