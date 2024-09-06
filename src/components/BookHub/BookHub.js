import React, { useState, useEffect } from 'react';
import './BookHub.css';

const BookHub = () => {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://openlibrary.org/search.json?q=${search}`);
        const data = await response.json();
        setBooks(data.docs);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    if (search) {
      fetchBooks();
    }
  }, [search]);

  return (
    <div className='bookhub-container'>
      <h1>Book Hub</h1>
      <input
        type='text'
        placeholder='Search for books...'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {loading && <p>Loading...</p>}
      {error && <p className='error'>{error}</p>}
      <div className='book-list'>
        {books.map((book) => (
          <div key={book.key} className='book-item'>
            <img
              src={book.cover_i ? `http://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg` : 'https://via.placeholder.com/150'}
              alt={book.title}
            />
            <h3>{book.title}</h3>
            <p>{book.author_name ? book.author_name.join(', ') : 'Unknown Author'}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookHub;
