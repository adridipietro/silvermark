import React, { useState } from 'react'
import BookmarkCard from './BookmarkCard'
import BookmarkForm from '../components/BookmarkForm'
import CategoryForm from '../components/CategoryForm'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem' 
import { connect } from 'react-redux'



const Bookmarks = (props) => {
    const [categoryId, setCategoryId] = useState('')

   
      
      const renderBookmarkCollection = () => {
            return props.bookmarks.map(bookmark => {
                return <BookmarkCard key={bookmark.id} {...bookmark}/>
            })
      }
  
      const filterByCategory = (e) => {
        debugger
        setCategoryId(e.target.value)
        return props.bookmarks.filter(bookmark => bookmark.category_id === categoryId)
      }
      
  
      return (
          <>
          <div className="general-container">
              <br></br>
              <BookmarkForm />
              <CategoryForm/>
              <form className="filter-category">
                      <p>FILTER BY CATEGORY</p>
                      <Select id="category-input" value={props.categories} onChange={filterByCategory}>
                          {props.categories.map(category => {
                              return (
                                  <MenuItem key={category.id} name={category.name} value={category.id} >{category.name}</MenuItem>
                              )
                          })}
                      </Select>
                  </form>
              <br></br>    
          </div>
          <div className="bookmark-collection-container">
            {renderBookmarkCollection()}  
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
