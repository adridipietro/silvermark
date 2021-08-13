import React, { Component } from 'react'
// fetching a list of our bookmarks from our api
import BookmarkCard from './BookmarkCard'
import BookmarkForm from './BookmarkForm'
import PropTypes  from 'prop-types'


const Bookmarks = ({ bookmarks }) => {
    


    const handleCreate = (createdBookmark) => {
        let _bookmarks = [...bookmarks]
        //debugger
        _bookmarks.unshift(createdBookmark)
        //unshift adds to beginning
        return _bookmarks
        
        // updating the key "bookmarks" with the createdBookmark
        // existing state, adding newly created Bookmark and updating the state
    }

    const renderBookmarkCollection = bookmarks.map(bookmark => {
        return <BookmarkCard key={bookmark.id} {...bookmark}/>
    })
    



        return (
            <div className="bookmarks-container">
                <br></br>
                <BookmarkForm  handleCreate={handleCreate}/>
                <br></br>
                {renderBookmarkCollection}
                
            </div>
        )
        // defining constant bookmarks as this class' state
        // iterating over the collection of bookmarks and returning a Bookmark grid item for each


}

Bookmarks.propTypes = {
    bookmarks: PropTypes.array
}

Bookmarks.defaultProps = {
    bookmarks: []
}

export default Bookmarks
