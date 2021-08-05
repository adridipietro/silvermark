import React, { Component } from 'react'
// fetching a list of our bookmarks from our api
import BookmarkSearch from './BookmarkSearch'
import Bookmark from './Bookmark'

export default class Bookmarks extends Component {
        state = {
            bookmarks: []
        }


    componentDidMount(){
        fetch(`http://localhost:3000/bookmarks`)
        .then((response) => response.json())
        .then(bookmarkList => {
            this.setState({ bookmarks: bookmarkList })
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
        return (
            <>
                <h2>Bookmarks</h2>
                <BookmarkSearch />
                <div className="bookmarks">
                    <ul>
                        {this.state.bookmarks.map((bookmark) => (
                            <Bookmark key={bookmark.id} {...bookmark}/>
                        ))}
                    </ul>
                </div>
            </>
        )

    }


}
