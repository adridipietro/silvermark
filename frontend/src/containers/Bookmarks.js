import React, { useState, useEffect } from 'react'
import BookmarkCard from './BookmarkCard'
import BookmarkForm from '../components/BookmarkForm'
import CategoryForm from '../components/CategoryForm'
import FilterBar from '../components/FilterBar'
import { connect } from 'react-redux'
import { useSelector } from 'react-redux'




const Bookmarks = (props) => {
    //debugger

    const renderBookmarkCollection = (props, query) => {
        if (!query) {
            return props.bookmarks.map(bookmark => {
                return <BookmarkCard key={bookmark.id} favoriteBookmark={props.favoriteBookmark} deleteBookmark={props.deleteBookmark} {...bookmark}/>
            })
        } else if (query){
            return filterByCategory(props, query).map(bookmark => {
                return <BookmarkCard key={bookmark.id} favoriteBookmark={props.favoriteBookmark} deleteBookmark={props.deleteBookmark} {...bookmark}/>
            })
        }
    }
  
    const filterByCategory = (props, query) => {
       return props.bookmarks.filter(bookmark => {
           return bookmark.headline.includes(query)
       })
      }
      
     const query = useSelector(state => state.bookmarks.query)
  
    return (
        <>
          <div className="forms-container">
              <br></br>
              <BookmarkForm />
              <br></br>
              <CategoryForm/>
              <br></br>
              <FilterBar/>
              <br></br>    
          </div>
          <div className="bookmark-collection-container">
            {renderBookmarkCollection(props, query)}  
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
