import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { editBookmark } from '../actions/index'
import BookmarkCard from '../containers/BookmarkCard'


export default class  EditForm extends React.Component {

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.editBookmark({...this.state})
        this.setState({
            headline: '',
            web_url: '',
            description: ''

        })
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
        // html name attribute as a key
        // uses the key to tell what part of state we are going to update
    }

    render() {
        const { headline, description, web_url} = this.state
        return (
                <form className="edit-form" onSubmit={this.handleSubmit}  >
                    <TextField id="headline-input" type="text" name="headline"  placeholder="headline" defaultValue={headline} onChange={this.handleChange}/><br></br>
                    <TextField id="description-input" type="text" name="description"  placeholder="description"  defaultValue={description} onChange={this.handleChange}/><br></br>
                    <TextField id="web-url-input" type="text" name="web_url"  placeholder="url" defaultValue={web_url}  onChange={this.handleChange}/><br></br>
                    <Button type="submit" className="submit-button" >Submit</Button><br></br>
                </form>


        )

    }
}
