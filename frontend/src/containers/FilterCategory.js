import { connect } from 'react-redux'
import React from 'react'
import BookmarkCard from './BookmarkCard'


const FilterCategory = (props) => {

    const renderFilteredBookmarks = () => {
        return props.bookmarks.map(bookmark => {
            return <BookmarkCard key={bookmark.id} favoriteBookmark={props.favoriteBookmark} deleteBookmark={props.deleteBookmark} {...bookmark}/>
        })
    }
   
    debugger
    return (
        <div class="filtered">
            {renderFilteredBookmarks()}
            
        </div>

    )
}

const mapStateToProps = (state) => {
    return{
        categories: state.categories.categories
    }
}


    
export default connect(mapStateToProps, null)(FilterCategory)