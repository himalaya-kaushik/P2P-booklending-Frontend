// src/components/borrower/SearchBooks.js
import React, { useState } from 'react';
import FormControl from '../common/formControl';
import { searchBooks } from '../../api/apiService';

const SearchBooks = () => {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);

  const handleSearch = async () => {
    const response = await searchBooks(query);
    setBooks(response);
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-center text-2xl font-bold">Search Books</h1>
      <FormControl label="Search" type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
      <button onClick={handleSearch} className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
        Search
      </button>
      <ul>
        {books.map((book) => (
          <li key={book.id}>{book.title} by {book.author} - ${book.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBooks;
