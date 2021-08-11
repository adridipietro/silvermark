import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

export default class BookmarkForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            headline: '',
            description: '',
            web_url: '',
            favorite: false,
            category_id: null
    
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit = (e) => {
        // prevent default
        // clear the form
        // assign the state to var
        // fetch call to api
        // method, headers, body
        e.preventDefault()

        const data = { ...this.state }
        const dataObject = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accepts": "application/json"
            },
            body: JSON.stringify(data)
        }
        fetch('http://localhost:3000/bookmarks', dataObject)
        .then(response => response.json())
        .then(json => this.props.handleCreate(json.data))
    }

    handleSubmit(event) {
        event.preventDefault()
        this.formSubmit(event.target)
    }

    async formSubmit(formData){
        var data = new FormData(formData)
        const dataObject = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accepts": "application/json"
            },
            body: JSON.stringify(data)
        }
        fetch('http://localhost:3000/bookmarks', dataObject)
        .then(response => response.json())
        .then(json => this.props.handleCreate(json))
    }

    

    handleChange = (e) => {
        const eName = e.target.name
        const eValue = e.target.value
        this.setState({ [eName]: eValue})
        // html name attribute as a key
        // uses the key to tell what part of state we are going to update
    }
    

    render() {
        return (
            <form className="bookmark-form" onSubmit={this.handleSubmit} handleCreate={this.handleCreate} >
                <TextField id="headline-input" type="text" name="bookmark[headline]"  defaultValue={this.state.headline} placeholder="headline" onChange={this.handleChange}/><br></br>
                <TextField id="description-input" type="text" name="description"  defaultValue={this.state.description} placeholder="description" onChange={this.handleChange}/><br></br>
                <TextField id="weburl-input" type="text" name="web-url" defaultValue={this.state.web_url} placeholder="url" onChange={this.handleChange}/><br></br>
                <Button type="submit" className="submit-button" >Submit</Button><br></br>
            </form>
        )
    }
}


// controlled forms: a form whose input (or elements) are controlled by React's state; control the value through state