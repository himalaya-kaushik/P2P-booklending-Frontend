// src/components/lender/AddBook.js
import React, { useState } from "react";
import FormControl from "../common/formControl";
// import { addBook } from "../../api/apiService";

const AddBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");

  const handleAddBook = async () => {
    // const response = await addBook({ title, author, price });
    // console.log("Book added:", response);
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-center text-2xl font-bold">Add Book</h1>
      <FormControl
        label="Title"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <FormControl
        label="Author"
        type="text"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <FormControl
        label="Price"
        type="text"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button
        onClick={handleAddBook}
        className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
      >
        Add Book
      </button>
    </div>
  );
};

export default AddBook;
