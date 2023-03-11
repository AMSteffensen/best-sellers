const Book = (props) => {
  const { img, title, author, children, getBook, id } = props;
  return (
    <article className="book">
      <div className="book__number">{id}</div>
      <img src={img} alt="book" />
      <h2>{title}</h2>
      <h4>{author}</h4>
      {/* <button className="book__btn" onClick={() => getBook(id)}>
        On Click
      </button> */}
      {children}
    </article>
  );
};

export default Book;
