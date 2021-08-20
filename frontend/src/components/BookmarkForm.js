import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem' 
import { createBookmark } from '../actions/index'
import { connect } from 'react-redux'

class BookmarkForm extends React.Component {
    
    state = {
            headline: '',
            description: '',
            web_url: '',
            favorite: false,
            category_id: null,
            categories: []
    }



    

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.createBookmark(this.state)
        debugger
        this.setState({
            headline: '',
            web_url: '',
            description: '',
            favorite: false

        })
    }


    

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    fetchCategoriesForSelect = (e) => {
        if (e.target.id === "category-input"){
            debugger
            return this.props.categories.map(category => {
                return <option key={category.id} value={category.name}>{category.name}</option>
            }) 
        }


    }




    render() {
        const { headline, description, web_url } = this.state
        return (
            <form className="bookmark-form" onSubmit={this.handleSubmit}  >
                <TextField id="headline-input" type="text" name="headline"   placeholder="headline" defaultValue={headline} onChange={this.handleChange}/><br></br>
                <TextField id="description-input" type="text" name="description"  placeholder="description"  defaultValue={description} onChange={this.handleChange}/><br></br>
                <TextField id="web-url-input" type="text" name="web_url"  placeholder="url" defaultValue={web_url}  onChange={this.handleChange}/><br></br>
                <Select id="category-input" label="Category"  onClick={this.fetchCategoriesForSelect} onChange={this.handleChange}></Select>
                <br></br>
                <Button type="submit" className="submit-button" >Submit</Button><br></br>
            </form>
        )
    }
}




export default connect(null, { createBookmark })(BookmarkForm)

// controlled forms: a form whose input (or elements) are controlled by React's state; control the value through state