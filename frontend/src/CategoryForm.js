import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

export default class CategoryForm extends React.Component {
    state = {
        name: '',
        bookmarks: []
    }



    

    handleChange = (e) => {
        const eName = e.target.name
        const eValue = e.target.value
        this.setState({
            [eName]: eValue
        })
    }

    handleSubmit = (e) => {
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
        fetch(`http://localhost:3000/categories`, dataObject)
        .then(response => response.json())
        .then(json => {
            this.setState({
                categories: json
            })
        })
    }

    
    render() {
        return (
            <form className="category-form" onSubmit={this.handleSubmit}>
                <h2>New Category</h2>
                <TextField type="text" name="category-name" placeholder="name" defaultValue={this.state.name} onChange={this.handleChange}/>
                <Button type="submit" className="submit-button">Submit</Button>
            </form>
        )

    }
    
}