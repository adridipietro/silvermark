import React from 'react'


export default class BookmarkForm extends React.Component {
    state = {
        headline: '',
        description: '',
        web_url: ''
    }


    onFormSubmit = (e) => {
        e.preventDefault()
        console.log("hi")
    }

    render() {
        return (
            <form className="bookmark-form" onSubmit={this.onFormSubmit}>
                <h2>New Bookmark</h2>
                <input type="text" name="bookmark-headline" placeholder="headline"/><br></br>
                <input type="text" name="bookmark-description" placeholder="description"/><br></br>
                <input type="text" name="bookmark-web-url" placeholder="url"/><br></br>
                <input type="submit" className="submit-button" value="Submit"/><br></br>
            </form>
        )
    }
}
