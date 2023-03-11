import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { fetchBooks } from "./API/nyTimes";

function Index() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks()
      .then((bookData) => {
        setBooks(bookData);
      })
      .catch((error) => {
        console.log("Error fetching books:", error);
      });
  }, []);

  return (
    <>
      <App books={books} />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Index />);
export default Index;
