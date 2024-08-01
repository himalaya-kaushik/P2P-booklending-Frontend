// src/components/lender/ViewBooks.js
import React, { useEffect } from "react";
// import { getBooks } from '../../api/apiService';

const ViewBooks = () => {
  // const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      // const response = await getBooks();
      // setBooks(response);
    };
    fetchBooks();
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="text-center text-2xl font-bold">View Books</h1>
      {/* <ul>
        {books.map((book) => (
          <li key={book.id}>{book.title} by {book.author} - ${book.price}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default ViewBooks;
