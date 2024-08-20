import { useState } from 'react'
import './App.css'
import BookForm from './BookForm'
import BookList from './BookList'
import BookSearch from './BookSearch'

function App() {

  //array to hold list of books
  const [books, setBooks] = useState([])

  //stores the current search input
  const [searchQuery, setSearchQuery] = useState('')

  //object book is passed as an argument and added to the array
  const handleAddBook = (book) => {
    setBooks([...books, book])
  }

  const filteredBooks = books.filter((book) => {
    const query = searchQuery.toLowerCase();
    return(
      book.title.toLowerCase().includes(query) ||
      book.author.toLowerCase().includes(query) ||
      book.genre.toLowerCase().includes(query) ||
      book.year.toString().includes(query) ||
      book.isbn.toString().includes(query)
    )
  })

  return (
    <>
      <div>
        <h1>Library Management System</h1>
        <BookSearch searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
        <BookForm addBook={handleAddBook} />
        <BookList books={filteredBooks}/>
      </div>
    </>
  )
}

export default App
