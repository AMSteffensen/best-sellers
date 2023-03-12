const Book = (props) => {
  const { title, author, children, id, isbn, url } = props;
  const imgUrl = `https://covers.openlibrary.org/b/isbn/${isbn}.jpg`;
  return (
    <article className="book">
      <div className="book__number">{id}</div>
      <img src={imgUrl} alt="book" />
      <h2>{title}</h2>
      <h4>{author}</h4>
      <a href={url} target="_blank" rel="noreferrer">
        View on amazon
      </a>
      {children}
    </article>
  );
};

export default Book;
