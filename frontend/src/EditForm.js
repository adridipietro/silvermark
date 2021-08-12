import React from 'react'
import BookmarkForm from './components/BookmarkForm'

export default function EditForm(props) {

    const handleSubmit = (e) => {
        console.log("edit")
    }

    const handleChange = (e) => {
        let eName = e.target.name
        let eValue = e.target.value
        this.setState({ [eName]: eValue})
    }

    return (
        <BookmarkForm 
        history={this.props.history}
        match={this.props.match}/>
    )
}
