import React from 'react'
import BookmarkCard from './BookmarkCard'
import BookmarkForm from '../components/BookmarkForm'
import CategoryForm from '../components/CategoryForm'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem' 
import { connect } from 'react-redux'
import { filterByCategory } from '../actions'


const Bookmarks = (props) => {
  
    
    const renderBookmarkCollection = () => {
        return props.bookmarks.map(bookmark => {
            return <BookmarkCard key={bookmark.id} {...bookmark}/>
        })

    }
    

    return (
        <div className="bookmarks-container">
            <br></br>
            <BookmarkForm />
            <CategoryForm/>
            <form className="filter-category">
                    <p>FILTER BY CATEGORY</p>
                    <Select id="category-input" value={props.categories} onChange={filterByCategory()}>
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


        // defining constant bookmarks as this class' state
        // iterating over the collection of bookmarks and returning a Bookmark grid item for each


}

const mapStateToProps = (currentState) => {
    return {
      bookmarks: currentState.bookmarks.bookmarks,
      categories: currentState.categories.categories
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        filterByCategory: (id) => dispatch(filterByCategory(id))
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Bookmarks)
