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

    
    render() {
        return (
            <form className="category-form">
                <h2>New Category</h2>
                <TextField type="text" name="category-name" placeholder="name" defaultValue={this.state.name} onChange={this.handleChange}/>
                <Button type="submit" className="submit-button">Submit</Button>
            </form>
        )

    }
    
}