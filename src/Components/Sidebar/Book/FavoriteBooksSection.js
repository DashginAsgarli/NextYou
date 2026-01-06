import BookItem from './BookItem';

function FavoriteBooksSection({ favorites, books, openBook, toggleFavorite }) {
  if (favorites.length === 0) return null;

  const favoriteBooks = books.filter(book => favorites.includes(book.id));

  return (
    <div>
      <h2 className="book-coloction-name" >Sevimli Kitablarım</h2>
      <section className="book-two">
        {favoriteBooks.map(book => (
          <BookItem
            key={book.id + "-fav"}
            book={book}
            isFavorite={true}
            openBook={openBook}
            toggleFavorite={toggleFavorite}
          />
        ))}
      </section>
    </div>
  );
}

export default FavoriteBooksSection;