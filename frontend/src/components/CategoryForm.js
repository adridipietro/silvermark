import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import PropTypes from 'prop-types'

export default class CategoryForm extends React.Component {
    state = {
        name: ''
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
        // html name attribute as a key
        // uses the key to tell what part of state we are going to update
    }

    submittedCategory = (category) => {
        const dataObject = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accepts": "application/json"
            },
            body: JSON.stringify(category)
        }
        fetch(`http://localhost:3000/categories`, dataObject)
        .then(response => response.json())
        .then(json => this.props.createCategory(json))
    
    }

    handleSubmit = (e) => {
         // prevent default
        // clear form
        // add to page, update state
        e.preventDefault()
        this.props.createCategory({...this.state})
        this.setState({
            name: ''
        })
    }

    
    render() {
        const { name } = this.state
        return (
            <form className="category-form" onSubmit={this.handleSubmit}>
                <TextField id="name-input" type="text" name="name" placeholder="new category" defaultValue={name} onChange={this.handleChange}/>
                <Button type="submit" className="submit-button">Submit</Button>
            </form>
        )

    }
    
}