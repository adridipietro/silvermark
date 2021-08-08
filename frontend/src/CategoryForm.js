import React from 'react'


export default class CategoryForm extends React.Component {
    state = {
        name: '',
        bookmarks: []
    }

    


    onFormSubmit = (e) => {
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

    handleChange = (e) => {
        const eName = e.target.name
        const eValue = e.target.value
        this.setState({
            [eName]: eValue
        })
    }

    
    render() {
        return (
            <form className="category-form">
                <h2>New Category</h2>
                <input type="text" name="category-name" placeholder="name" defaultValue={this.state.name} onChange={this.handleChange}/>
                <input type="submit" className="submit-button" value="Submit" onSubmit={this.onFormSubmit}/>
            </form>
        )

    }
    
}