import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'

export default class BookmarkForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            headline: '',
            description: '',
            web_url: '',
            favorite: false,
            category_id: null,
            categories: []
    
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
        const { headline, web_url, description } = this.state
        let data = {
            headline: headline,
            web_url: web_url,
            description: description
        }
        
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
        debugger
    }

    

    handleChange = (e) => {
        const { name, defaultValue } = e.target
        this.setState({
            [name]: defaultValue
        })
        // html name attribute as a key
        // uses the key to tell what part of state we are going to update
    }

    fetchCategoriesForSelect = (e) => {
        if (e.target.matches('#category-input')) {
            fetch('http://localhost:3000/categories')
                .then(resp => resp.json())
                .then(json => {
                    this.setState({ categories: json})
                })
        }   

    }



      
    

    render() {
        const { headline, description, web_url} = this.state
        return (
            <form className="bookmark-form" onSubmit={this.handleSubmit}  >
                <TextField id="headline-input" type="text" name="headline"   placeholder="headline" defaultValue={headline} onChange={this.handleChange}/><br></br>
                <TextField id="description-input" type="text" name="description"  placeholder="description"  defaultValue={description} onChange={this.handleChange}/><br></br>
                <TextField id="web-url-input" type="text" name="web-url"  placeholder="url" defaultValue={web_url}  onChange={this.handleChange}/><br></br>
                
                <Button type="submit" className="submit-button" >Submit</Button><br></br>
            </form>
        )
    }
}


// controlled forms: a form whose input (or elements) are controlled by React's state; control the value through state