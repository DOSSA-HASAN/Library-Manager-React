import React, { useState } from 'react'

function BookForm({ addBook }) {
    
    //string to store book title
    const [title, setTitle] = useState('')

    //string to store book author
    const [author, setAuthor] = useState('')

    //string to store book genre
    const [genre, setGenre] = useState('')

    //string to store book year
    const [year, setYear] = useState('')

    //string to store book ISBN
    const [isbn, setIsbn] = useState('')
    
    //function to submit form
    const handleSubmit = (event) => {
        event.preventDefault();
        addBook({title, author, genre, year, isbn})
        setTitle('')
        setAuthor('')
        setGenre('')
        setYear('')
        setIsbn('')
    }

    return (
        <div>
            <form>
                <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} placeholder='Title' required/>

                <input type="text" value={author} onChange={(event) => setAuthor(event.target.value)} placeholder='Author' required/>

                <input type="text" value={genre} onChange={(event) => setGenre(event.target.value)} placeholder='Genre' required/>

                <input type="number" value={year} onChange={(event) => setYear(event.target.value)} placeholder='Year' required/>

                <input type="text" value={isbn} onChange={(event) => setIsbn(event.target.value)} placeholder='ISBN' required/>

                <button onClick={handleSubmit} type='submit'>Add Book</button>
            </form>
        </div>
    )
}

export default BookForm
