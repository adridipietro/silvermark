import React from 'react'


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

    
    render() {
        return (
            <form className="category-form">
                <h2>New Category</h2>
                <input type="text" name="category-name" placeholder="name" defaultValue={this.state.name} onChange={this.handleChange}/>
                <input type="submit" className="submit-button" value="Submit" />
            </form>
        )

    }
    
}