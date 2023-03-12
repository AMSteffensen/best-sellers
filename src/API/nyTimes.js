const KEY = process.env.REACT_APP_API_KEY;
const url =
  "https://api.nytimes.com/svc/books/v3/lists.json?list-name=hardcover-fiction&api-key=";

export const fetchBooks = () => {
  return fetch(url + KEY)
    .then((response) => response.json())
    .then((data) => {
      const bookData = data.results.map((result) => ({
        label: result.book_details[0].title,
        isbn: result.isbns[0].isbn10,
        url: result.amazon_product_url,
        author: result.book_details[0].author,
        title: result.book_details[0].title,
        id: result.rank,
      }));
      return bookData;
    });
};
