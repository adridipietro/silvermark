import React, { Component } from 'react'
// fetching a list of our bookmarks from our api
import BookmarkSearch from './BookmarkSearch'
import Bookmark from './Bookmark'

export default class Bookmarks extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            bookmarks: [],
            searchTerm: '' 
        }
    }
    // binding in the constructor
    // "this" refers to the class component
    // 


    componentDidMount() {

        fetch(`http://localhost:3000/bookmarks`)
        .then(response => response.json())
        .then(json => {
            this.setState({ 
                bookmarks: json.data
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
    }


    
    
    render() {
        const { bookmarks } = this.state
        // object destructuring : assigning a value to a variable w/o duplicating the name
        // this is the same as "const bookmarks = this.state.bookmarks"
        return (
            <div className="bookmarks">
                <h2>Bookmarks</h2>
                <BookmarkSearch />
                
                    <ul>
                        {bookmarks.map(({attributes}) => {
                            return (<Bookmark key={attributes.id} {...attributes}/>)
                        })}
                    </ul>
            </div>
        )
        // defining constant bookmarks as this class' state
        // iterating over the collection of bookmarks and returning a Bookmark grid item for each

    }


}
