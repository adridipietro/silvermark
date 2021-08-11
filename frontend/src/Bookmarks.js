import React, { Component } from 'react'
// fetching a list of our bookmarks from our api
import BookmarkSearch from './BookmarkSearch'
import Bookmark from './Bookmark'
import EditForm from './EditForm'
import BookmarkForm from './BookmarkForm'





export default class Bookmarks extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            bookmarks: []
        }
        
    // binding in the constructor
    // "this" refers to the class component

    this.handleCreate = this.handleCreate.bind(this)
    }
    
    /* handleEdit = () => {
        <EditForm/>
    }

    handleDelete = () => {
        console.log("hi")
    } */

    

    

    
    componentDidMount() {
        fetch('http://localhost:3000/bookmarks')
        .then(response => response.json())
        .then(json => {
            this.setState({ 
                bookmarks: json.data
                // takes the key "bookmarks" and updates its value with json object from backend
            })

            // function .setState() triggers a new render
            // we use "this" bc we are inside a class component 
        })
       // FETCH returns a Promise
       // Promise is an object that represents some value that will be available later
       // The data is accessed when the Promise is resolved

        // 1. component begins to get mounted to DOM
        // 2. initial render happens (empty array of bookmarks)
        // 3. componentDidMount is called
        // 4. once request finishes, setState() is called
        // 5. bookmark property is filled with bookmarks from backend
        console.log(this)
    }

    handleCreate(createdBookmark) {
        let _bookmarks = this.state.bookmarks
        _bookmarks.unshift(createdBookmark)
        //unshift adds to beginning
        this.setState({
            bookmarks: _bookmarks
            // updating the key "bookmarks" with the createdBookmark
        })
        // existing state, adding newly created Bookmark and updating the state
    }

    renderBookmarkCollection(){
        return (
            this.state.bookmarks.map(({attributes}) => <Bookmark key={attributes.id} {...attributes}/>)
        )
    }
    

    
    render() {
        // object destructuring : assigning a value to a variable w/o duplicating the name
        // this is the same as "const bookmarks = this.state.bookmarks"
        console.log(this.state.bookmarks)
        return (
            <div className="bookmarks">
                <BookmarkForm handleCreate={this.handleCreate} />
                <Bookmark />
                {this.renderBookmarkCollection()}
                
            </div>
        )
        // defining constant bookmarks as this class' state
        // iterating over the collection of bookmarks and returning a Bookmark grid item for each

    }
    

}
