const KEY = process.env.REACT_APP_API_KEY;
const url =
  "https://api.nytimes.com/svc/books/v3/lists.json?list-name=hardcover-fiction&api-key=";

export const fetchBooks = () => {
  return fetch(url + KEY)
    .then((response) => response.json())
    .then((data) => {
      const bookData = data.results.map((result) => ({
        label: result.book_details[0].title,
        author: result.book_details[0].author,
        title: result.book_details[0].title,
        img: result.book_details[0].book_image,
        id: result.rank,
      }));
      return bookData;
    });
};
