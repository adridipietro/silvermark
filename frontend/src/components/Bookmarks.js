import React, { Component } from 'react'
// fetching a list of our bookmarks from our api
import BookmarkCard from './BookmarkCard'
import BookmarkForm from './BookmarkForm'
//import CategoryForm from './CategoryForm'


export default class Bookmarks extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            bookmarks: []
        }
        
        // binding in the constructor
        // "this" refers to the class component

        this.handleCreate = this.handleCreate.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
        this.editItem = this.editItem.bind(this)
        this.handleFavorite = this.handleFavorite.bind(this)

    }

    
    
    

    handleCreate(createdBookmark) {
        let _bookmarks = this.state.bookmarks
        debugger
        _bookmarks.unshift(createdBookmark)
        //unshift adds to beginning
        this.setState({
            bookmarks: _bookmarks
            // updating the key "bookmarks" with the createdBookmark
        })
        // existing state, adding newly created Bookmark and updating the state
    }

    renderBookmarkCollection(){
        //debugger
        return (
           this.state.bookmarks.map(bookmark => <BookmarkCard key={bookmark.id} {...bookmark} editItem={this.editItem} deleteItem={this.deleteItem} handleFavorite={this.handleFavorite}/>)
        )
    }


    
    render() {
        // object destructuring : assigning a value to a variable w/o duplicating the name
        // this is the same as "const bookmarks = this.state.bookmarks"
        console.log(this.state.bookmarks)
        return (
            <div className="bookmarks-container">
                <br></br>
                <BookmarkForm  handleCreate={this.handleCreate}/>
                <br></br>
                {this.renderBookmarkCollection()}
                
            </div>
        )
        // defining constant bookmarks as this class' state
        // iterating over the collection of bookmarks and returning a Bookmark grid item for each

    }
 

}
