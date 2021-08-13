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
    
        //console.log(this)

    }

    
    
    /* editItem = (id) => {
        let _bookmarks = [...this.state.bookmarks]
        let bookmark = _bookmarks.find(bookmark => bookmark.id === id)
        const updatedData = {
            headline: bookmark.headline,
            description: bookmark.description,
            web_url: bookmark.description,
            category_id: bookmark.category_id
        }

        fetch(`http://localhost:3000/bookmarks/${id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": 'application/json',
                "Accepts": 'application/json'
            },
            body: JSON.stringify(updatedData) 
            })
        .then(resp => resp.json())
        .then(() => {
            let _bookmarks = [...this.state.bookmarks]
            alert("Successfully Updated")
            this.setState({
                bookmarks: _bookmarks
            })
    
        })
    }
    

    deleteItem = (id) => {
        fetch(`http://localhost:3000/bookmarks/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": 'application/json',
                "Accepts": 'application/json'
            }
        })
        .then(() => {
            let _bookmarks = [...this.state.bookmarks]
            let index = _bookmarks.indexOf(id)
            _bookmarks.splice(index, 1)
            // splice: takes collection and then number of removed items; removing 1 element
            alert("Succesfully Deleted")
            this.setState({
                bookmarks: _bookmarks
            })
        })
    }

    handleFavorite = (id) => {
        let _bookmarks = [...this.state.bookmarks]
        let bookmark = _bookmarks.find(bookmark => bookmark.id === id)
        const data = {
            favorite: bookmark.favorite
        }
        const configObject = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }

        fetch(`http://localhost:3000/bookmarks/${id}`, configObject)
        .then(response => response.json())
        .then(json => {
            this.setState(prevState => {
                const idx = prevState.bookmarks.findIndex(bookmark => bookmark.id === json.id)
                return {...prevState.bookmarks.slice(0, idx), json}
            })
        })
    } */

    

    

    
    componentDidMount() {
        fetch('http://localhost:3000/bookmarks')
        .then(response => response.json())
        .then(json => {
            this.setState({ bookmarks: json})
                // takes the key "bookmarks" and updates its value with json object from backend
            

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
