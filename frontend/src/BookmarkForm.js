import React from 'react'


export default class BookmarkForm extends React.Component {
    state = {
        headline: '',
        description: '',
        web_url: ''

    }


    onFormSubmit = (e) => {
        // prevent default
        // clear the form
        // assign the state to var
        // fetch call to api
        // method, headers, body
        e.preventDefault()
        const data = this.state
        fetch(`http://localhost:3000/bookmarks`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accepts": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(json => {debugger})
        
    }

    handleChange = (e) => {
        const eName = e.target.name
        const eValue = e.target.value
        this.setState({
            [eName]: eValue
        })
    }

    render() {
        return (
            <form className="bookmark-form" onSubmit={this.onFormSubmit}>
                <h2>New Bookmark</h2>
                <input type="text" name="headline"  defaultValue={this.state.headline} placeholder="headline" onChange={this.handleChange}/><br></br>
                <input type="text" name="description"  defaultValue={this.state.description} placeholder="description" onChange={this.handleChange}/><br></br>
                <input type="text" name="web-url" defaultValue={this.state.web_url} placeholder="url" onChange={this.handleChange}/><br></br>
                <input type="submit" className="submit-button" value="Submit"/><br></br>
            </form>
        )
    }
}


// controlled forms: a form whose input (or elements) are controlled by React's state; control the value through state