import BookItem from './BookItem';

function BookList({ books, favorites, openBook, toggleFavorite }) {
  return (
    <div>
      <h2 className="book-coloction-name">Kitab Kolleksiyam</h2>
      <section className="book-two">
        {books.map(book => (
          <BookItem
            key={book.id}
            book={book}
            isFavorite={favorites.includes(book.id)}
            openBook={openBook}
            toggleFavorite={toggleFavorite}
          />
        ))}
      </section>
    </div>
  );
}

export default BookList;