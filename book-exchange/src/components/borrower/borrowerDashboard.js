// src/components/borrower/BorrowerDashboard.js
import React, { useEffect, useState } from 'react';
import { getBooksNearUser } from '../../api/apiService';

const BorrowerDashboard = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await getBooksNearUser();
      setBooks(response);
    };
    fetchBooks();
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="text-center text-2xl font-bold">Borrower Dashboard</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id}>{book.title} by {book.author} - ${book.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default BorrowerDashboard;
