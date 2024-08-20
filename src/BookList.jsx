import React from 'react'

function BookList({ books }) {
    return (
        <div>
            <h2>Book List:</h2>
            <ul>
                {books.length === 0 ? (
                    <li>NO BOOKS FOUND!</li>
                ) : (
                    books.map((book, index) => (
                        <li key={index} >{book.title} by {book.author} - {book.genre} {book.year}, ISBN: {book.isbn}</li>
                    ))
                )}
            </ul>
            
        </div>
    )
}

export default BookList
