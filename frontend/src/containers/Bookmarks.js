import React, { useEffect } from 'react'
// fetching a list of our bookmarks from our api
import BookmarkCard from './BookmarkCard'
import BookmarkForm from '../components/BookmarkForm'
import PropTypes  from 'prop-types'


const Bookmarks = (props) => {
    const bookmarks = props.bookmarks

    useEffect(() => {
        return bookmarks
    })
  
    
    const renderBookmarkCollection = () => {
        return props.bookmarks.map(bookmark => {
            return <BookmarkCard key={bookmark.id} {...bookmark}/>
        })

    }
    


    return (
        <div className="bookmarks-container">
            <br></br>
            <BookmarkForm />
            <br></br>
            {renderBookmarkCollection()}      
        </div>
    )


        // defining constant bookmarks as this class' state
        // iterating over the collection of bookmarks and returning a Bookmark grid item for each


}

Bookmarks.propTypes = {
    bookmarks: PropTypes.array
}

// calling the propTypes property on our component 
//and pass it an object that specifies the props object's expected type

Bookmarks.defaultProps = {
    bookmarks: []
}
// a React component property
// allows you to set default values for the props arg. 

export default Bookmarks
