import React, { useState, useEffect } from 'react'
import BookmarkForm from './BookmarkForm'
import Bookmark from './Bookmark'
import BookmarkSearch from './BookmarkSearch'

function BookmarkCollection() {
    const [bookmarks, setBookmarks] = useState([])

    useEffect(() => {
        // get all Bookmarks from api
        // update Bookmarks in the state
        fetch(`http://localhost:3000/bookmarks`)
            .then(response => setBookmarks(response.data)
        )

    
        
       // FETCH returns a Promise
       // Promise is an object that represents some value that will be available later
       // The data is accessed when the Promise is resolved

        // 1. component begins to get mounted to DOM
        // 2. initial render happens (empty array of Bookmarks)
        // 3. componentDidMount is called
        // 4. once request finishes, setState() is called
        // 5. Bookmark property is filled with Bookmarks from backend
    }, [])

    const handleCreate = (createdBookmark) => {
        setBookmarks({
            bookmarks: [...bookmarks, createdBookmark]

        })
            // updating the key "bookmarks" with the createdBookmark
        // existing state, adding newly created Bookmark and updating the state
    }


    const BookmarkList = bookmarks.map(({attributes}) => {
        return (
            <Bookmark key={attributes.id} {...attributes}/>
        )
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = { ...bookmarks }
        const dataObject = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accepts": "application/json"
            },
            body: JSON.stringify(data)
        }
        fetch(`http://localhost:3000/bookmarks`, dataObject)
        .then(response => response.json())
        .then(json => {
            this.setState({
                Bookmarks: json
            })
        })
    }

    return (
            <div className="bookmarks">
                <BookmarkSearch />
                <BookmarkForm onSubmit={handleSubmit} handleCreate={handleCreate}/>
                {BookmarkList}
            </div>
    )
}

export default BookmarkCollection