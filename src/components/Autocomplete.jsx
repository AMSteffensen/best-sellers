import React, { useState } from "react";
//import books from "../API/books";
import Book from "./Book";

const Autocomplete = ({ books }) => {
  const [inputValue, setInputValue] = useState("");
  const [filteredBooks, setFilteredBooks] = useState([]);

  console.log(books);

  const getBook = () => {
    console.log("je");
  };
  const handleChange = (event) => {
    const value = event.target.value;
    setInputValue(value);

    const filtered = books.filter((book) =>
      book.title.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredBooks(filtered);
  };

  return (
    <div className="autocomplete">
      <input
        className="autocomplete-input"
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Search for a book title"
      />

      {inputValue === "" ? (
        <ul className="booklist">
          {books.map((book, index) => (
            <Book {...book} />
          ))}
        </ul>
      ) : (
        <ul className="booklist">
          {filteredBooks.map((book, index) => (
            <Book {...book} getBook={getBook} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Autocomplete;
