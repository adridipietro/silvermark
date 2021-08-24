import React, { useState } from 'react'
import BookmarkCard from './BookmarkCard'
import BookmarkForm from '../components/BookmarkForm'
import CategoryForm from '../components/CategoryForm'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem' 
import { connect } from 'react-redux'



const Bookmarks = (props) => {
    const [filter, setFilter] = useState('')

    const handleSubmit = (e) => {
        const filter = e.target.value
        setFilter(filter)
    }
  
      
      const renderBookmarkCollection = () => {
        return props.bookmarks.map(bookmark => {
          return <BookmarkCard key={bookmark.id} {...bookmark}/>
        })
      }
  
      const filterByCategory = (e) => {
          setFilter(props.bookmarks.map((bookmark) => {
              if (bookmark.category_id === filter) {
                  return <BookmarkCard key={bookmark.id} category_id={bookmark.category_id} {...bookmark}/> 
              } else {
                  return null 
              }
          }))
      }
      
  
      return (
          <div className="bookmarks-container">
              <br></br>
              <BookmarkForm />
              <CategoryForm/>
              <form className="filter-category">
                      <p>FILTER BY CATEGORY</p>
                      <Select id="category-input" value={props.categories} onChange={(e) => handleSubmit(e)}>
                          {props.categories.map(category => {
                              return (
                                  <MenuItem key={category.id} name={category.name} value={category.id} >{category.name}</MenuItem>
                              )
                          })}
                      </Select>
                  </form>
              <br></br>
              {renderBookmarkCollection()}      
          </div>
      )
  
  }

const mapStateToProps = (currentState) => {
    return {
      bookmarks: currentState.bookmarks.bookmarks,
      categories: currentState.categories.categories
    }
}





export default connect(mapStateToProps, null)(Bookmarks)
