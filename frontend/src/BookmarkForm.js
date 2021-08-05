import React from 'react'


export default class BookmarkForm extends React.Component {
    state = {
        headline: '',
        description: '',
        web_url: ''
    }

    handleSubmit = (e) => {
        e.preventDefault()
    }

    onFormSubmit = (e) => {
        e.preventDefault()
    }

    render() {
        return (
            <form className="bookmark-form" onSubmit={onFormSubmit}>
                <input type="text" name="bookmark-headline">headline</input>
                <input type="text" name="bookmark-description">description</input>
                <input type="text" name="bookmark-web-url">web url</input>
                <input type="submit" className="submit-button" value="Submit" onSubmit={handleSubmit}/>
            </form>
        )
    }
}
