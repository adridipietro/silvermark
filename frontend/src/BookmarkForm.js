import React from 'react'


export default class BookmarkForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            headline: '',
            description: '',
            web_url: '',
            favorite: false,
            category_id: null
    
        }
        this.handleChange = this.handleChange.bind(this)


    }
    

    handleChange = (e) => {
        const eName = e.target.name
        const eValue = e.target.value
        this.setState({ [eName]: eValue})
        // html name attribute as a key
        // uses the key to tell what part of state we are going to update
    }
    

    render() {
        return (
            <form className="bookmark-form" >
                <input type="text" name="headline"  defaultValue={this.state.headline} placeholder="headline" onChange={this.handleChange}/><br></br>
                <input type="text" name="description"  defaultValue={this.state.description} placeholder="description" onChange={this.handleChange}/><br></br>
                <input type="text" name="web-url" defaultValue={this.state.web_url} placeholder="url" onChange={this.handleChange}/><br></br>
                <input type="submit" className="submit-button" value="Submit" /><br></br>
            </form>
        )
    }
}


// controlled forms: a form whose input (or elements) are controlled by React's state; control the value through state