import React from 'react'
import Bookmark from './Bookmark'

export default function EditForm(props) {

    const handleSubmit = (e) => {
        console.log("edit")
    }
    return (
        <form className="edit-bookmark-form" onSubmit={this.handleSubmit}>
                <input type="text" name="bookmark-headline" />{props.headline}<br></br>
                <input type="text" name="bookmark-description" />{props.description}<br></br>
                <input type="text" name="bookmark-web-url"/>{props.web_url}<br></br>
                <input type="submit" className="submit-button" value="Submit"/><br></br>
        </form>
    )
}
