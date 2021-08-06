import React from 'react'


export default class BookmarkForm extends React.Component {
    state = {
        headline: '',
        description: '',
        web_url: ''

    }


    onFormSubmit = (e) => {
        e.preventDefault()
        debugger
    }

    handleChange = (e) => {
        const elName = e.target.name
        const elValue = e.target.value
        this.setState({
            [elName]: elValue
        })
    }

    render() {
        return (
            <form className="bookmark-form" onSubmit={this.onFormSubmit}>
                <h2>New Bookmark</h2>
                <input type="text" name="bookmark-headline"  defaultValue={this.state.headline} placeholder="headline" onChange={this.handleChange}/><br></br>
                <input type="text" name="bookmark-description"  defaultValue={this.state.description} placeholder="description" onChange={this.handleChange}/><br></br>
                <input type="text" name="bookmark-web-url" defaultValue={this.state.web_url} placeholder="url" onChange={this.handleChange}/><br></br>
                <select id="category" className="category-select" defaultValue={this.state.category_id} onChange={this.handleChange}>
                    <option>Category 1</option>
                    <option>Category 2</option>
                    <option>Category 3</option>
                </select><br></br>
                <input type="submit" className="submit-button" value="Submit"/><br></br>
            </form>
        )
    }
}


// controlled forms: a form whose input (or elements) are controlled by React's state; control the value through state