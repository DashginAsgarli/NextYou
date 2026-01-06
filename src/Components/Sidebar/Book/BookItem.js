function BookItem({ book, isFavorite, openBook, toggleFavorite }) {
  return (
    <div className="book-two-box">
      <div className="book-two-box-d">
        <img src={book.cover} alt={book.title} />
        <div className="book-name">{book.title}</div>
        <div className="book-auther">{book.author}</div>
        <div className="book-type">{book.firstPublishYear}</div>
        
        <div className="book-actions">
          <button onClick={() => openBook(book.id)}>Oxu</button>
          <button 
            className="favorite-btn"
            onClick={() => toggleFavorite(book.id)}
            style={{ color: isFavorite ? '#ff6b6b' : '#ccc' }}>
            <i className={`bi ${isFavorite ? 'bi-heart-fill' : 'bi-heart'}`}></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookItem;