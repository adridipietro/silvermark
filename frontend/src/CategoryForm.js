import React from 'react'


export default class CategoryForm extends React.Component {
    state = {
        name: '',
        bookmarks: []
    }


    onFormSubmit = (e) => {
        e.preventDefault()
        console.log("hi")
    }

    render() {
        return (
            <form className="category-form" onSubmit={this.onFormSubmit}>
                <h2>New Category</h2>
                <input type="text" name="category-name" placeholder="name"/>
                <input type="submit" className="submit-button" value="Submit"/>
            </form>
        )
    }
}