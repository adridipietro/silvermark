import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { createCategory } from '../actions/index'
import { connect } from 'react-redux'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem' 



class CategoryForm extends React.Component {
    state = {
        name: ''
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.createCategory()

    }

    
    render() {
        const { name } = this.state
        return (
            <div>
                <p>ADD CATEGORY</p>
                <form className="category-form" onSubmit={this.handleSubmit}>
                    <TextField id="name-input" type="text" name="name" placeholder="new category" defaultValue={name} onChange={this.handleChange}/>
                    <Button type="submit" className="submit-button">Submit</Button>
                </form>
                
            </div>
        )

    }
    
}

const mapState = (currentState) => {
    return {
        categories: currentState.categories.categories
    }
}

export default connect(mapState, { createCategory })(CategoryForm)