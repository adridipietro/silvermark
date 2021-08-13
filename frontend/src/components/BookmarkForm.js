import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import PropTypes from 'prop-types'

export default class BookmarkForm extends React.Component {
    
    state = {
            headline: '',
            description: '',
            web_url: '',
            favorite: false,
            category_id: null,
            categories: []
    
    }


    submittedBookmark = (bookmark) => {
        // fetch call to api
        // method, headers, body
        const dataObject = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accepts": "application/json"
            },
            body: JSON.stringify(bookmark)
        }
        fetch('http://localhost:3000/bookmarks', dataObject)
        .then(response => response.json())
        .then(json => this.props.handleCreate(json))
        //debugger
    }

    handleSubmit = (e) => {
        // prevent default
        // clear form
        // add to page, update state
        e.preventDefault()
        this.props.handleCreate({...this.state})
        this.setState({
            headline: '',
            web_url: '',
            description: '',
            favorite: false

        })
    }

    

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
        // html name attribute as a key
        // uses the key to tell what part of state we are going to update
    }

    fetchCategoriesForSelect = () => {
            fetch('http://localhost:3000/categories')
                .then(resp => resp.json())
                .then(json => {
                    this.setState({ categories: json})
                })

    }




    render() {
        const { headline, description, web_url} = this.state
        return (
            <form className="bookmark-form" onSubmit={this.handleSubmit}  >
                <TextField id="headline-input" type="text" name="headline"   placeholder="headline" defaultValue={headline} onChange={this.handleChange}/><br></br>
                <TextField id="description-input" type="text" name="description"  placeholder="description"  defaultValue={description} onChange={this.handleChange}/><br></br>
                <TextField id="web-url-input" type="text" name="web_url"  placeholder="url" defaultValue={web_url}  onChange={this.handleChange}/><br></br>
                <Select id="category-input" >
                    {this.state.categories.map(category => <MenuItem key={category.id}>{category.name}</MenuItem>)}
                </Select><br></br>
                <Button type="submit" className="submit-button" >Submit</Button><br></br>
            </form>
        )
    }
}


// controlled forms: a form whose input (or elements) are controlled by React's state; control the value through state