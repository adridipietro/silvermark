import React from 'react'


export default class BookmarkForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            headline: '',
            description: '',
            web_url: '',
            favorite: false
    
        }


    }



    handleSubmit = (e) => {
        // prevent default
        // clear the form
        // assign the state to var
        // fetch call to api
        // method, headers, body
        e.preventDefault()
        debugger
        const data = { ...this.state, favorite: false }
        const dataObject = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accepts": "application/json"
            },
            body: JSON.stringify(data)
        }
        fetch(`http://localhost:3000/bookmarks`, dataObject)
        .then(response => response.json())
        .then(json => this.props.handleCreate(json))
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
            <form className="bookmark-form" >
                <h2>New Bookmark</h2>
                <input type="text" name="headline"  defaultValue={this.state.headline} placeholder="headline" onChange={this.handleChange}/><br></br>
                <input type="text" name="description"  defaultValue={this.state.description} placeholder="description" onChange={this.handleChange}/><br></br>
                <input type="text" name="web-url" defaultValue={this.state.web_url} placeholder="url" onChange={this.handleChange}/><br></br>
                <input type="submit" className="submit-button" value="Submit" onSubmit={this.handleSubmit}/><br></br>
            </form>
        )
    }
}


// controlled forms: a form whose input (or elements) are controlled by React's state; control the value through state