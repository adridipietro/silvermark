import React, { useState, useEffect } from 'react'
import BookmarkCard from './BookmarkCard'
import BookmarkForm from '../components/BookmarkForm'
import CategoryForm from '../components/CategoryForm'
import FilterBar from '../components/FilterBar'
import { connect } from 'react-redux'
import { useSelector } from 'react-redux'




const Bookmarks = (props) => {

    const query = useSelector(state => state.bookmarks.query)

    const renderBookmarkCollection = () => {
            return props.bookmarks.map(bookmark => {
                return <BookmarkCard key={bookmark.id} favoriteBookmark={props.favoriteBookmark} deleteBookmark={props.deleteBookmark} {...bookmark}/>
            })
    }

    const filterByCategory = (props) => {
        if (!!query) {
            const filteredBookmarks = props.bookmarks.filter(bookmark => bookmark.query)
            return filteredBookmarks
        } else {
            renderBookmarkCollection()
        }
    }
  
  
    return (
        <>
          <div className="forms-container">
              <br></br>
              <BookmarkForm />
              <br></br>
              <CategoryForm />
              <br></br>
              <FilterBar filterByCategory={filterByCategory} />
              <br></br>    
          </div>
          <div className="bookmark-collection-container">
            {renderBookmarkCollection(props)}  
          </div>
        </>
    )
  
}

const mapStateToProps = (currentState) => {
    return {
      bookmarks: currentState.bookmarks.bookmarks,
      categories: currentState.categories.categories
    }
}






export default connect(mapStateToProps, null)(Bookmarks)
