import React from 'react'

function BookSearch({ searchQuery, setSearchQuery }) {
    return (
        <div>
            <input type="text" value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)}
            placeholder='Search for book by title, author, year, ISBN'/>
        </div>
    )
}

export default BookSearch
