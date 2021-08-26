import React from 'react'
import BookmarkCard from './BookmarkCard'
import { connect } from 'react-redux'

const FilteredBookmarks = () => {
    return (
        <div className="filtered-bookmarks-container">
            <div className="bookmark-card">
            {/* {props.bookmarks.map(bookmark => {
                if (bookmark.category_id === categoryId) {
                    return <BookmarkCard key={bookmark.id} {...bookmark}/>
                }   
            })} */}
            </div>
        </div>
    )
}


const mapStateToProps = (currentState) => {
    return {
      bookmarks: currentState.bookmarks.bookmarks,
      categories: currentState.categories.categories
    }
}


export default connect(mapStateToProps, null)(FilteredBookmarks)
