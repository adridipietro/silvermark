import { Button } from '@material-ui/core'
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


    
export default FilterCategory