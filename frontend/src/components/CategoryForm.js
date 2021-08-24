import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { createCategory } from '../actions/index'
import { connect } from 'react-redux'




class CategoryForm extends React.Component {
    state = {
        name: ''
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        let data = this.state
        this.props.createCategory(data)

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

const mapDispatch = (dispatch) => {
    return {
      createCategory: (data) => dispatch(createCategory(data))
      
    }
}

export default connect(null, mapDispatch)(CategoryForm)