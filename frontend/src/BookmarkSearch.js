import React, { useState } from 'react'

const BookmarkSearch = ( { handleSearch }) => {
    const [searchTerm, setSearchTerm] = useState('')

    const handleSubmit = (e) => {
        const term = e.target.value
        setSearchTerm(term)
        handleSearch(term)
    }

    return (
        <div className="bookmark-search">
            <input type="text" className="searchTerm"  name="searchTerm" placeholder="Search.." />
            <input type="submit" value="Search" onSubmit={handleSubmit}/> 
        </div>
    )
}

export default BookmarkSearch