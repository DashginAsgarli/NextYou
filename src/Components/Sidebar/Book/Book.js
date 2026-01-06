import "./book.css";
import { useState, useEffect } from "react";
import BookHeader from "./BookHeader";
import BookList from "./BookList";
import FavoriteBooksSection from "./FavoriteBooksSection";
import BookReadingTracker from "./BookReadingTracker";
import BookImg from '../../İmages/unnamed.jpg'
function Book() {
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [readingStats, setReadingStats] = useState({});

  useEffect(() => fetchBooks("best books"), []);

  function fetchBooks(query) {
    fetch(`https://openlibrary.org/search.json?q=${encodeURIComponent(query)}&limit=20`)
    // 
      .then(res => res.json())
      .then(data => setBooks(formatBooks(data)))
  }

  function formatBooks(data) {
    return data.docs?.map(book => ({
      id: book.key || "book-" + Math.random(),
      title: book.title || "Ad yoxdur",
      author: book.author_name?.[0] || "Naməlum",
      cover: book.cover_i
        ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
        : "https://openlibrary.org/images/icons/avatar_book-sm.png",
      firstPublishYear: book.first_publish_year || "-"
    })) || [];
  }

  // axtarış
  function handleSearch() { fetchBooks(searchQuery.trim() || "best books") }

  // kitabı açmaq
  function openBook(bookId) {
    const url = bookId?.startsWith("/works/") || bookId?.startsWith("/books/")
      ? "https://openlibrary.org" + bookId
      : "https://openlibrary.org";
    window.open(url, "_blank");
  }

  // favorit 
  function toggleFavorite(bookId) {
    setFavorites(prev => prev.includes(bookId) ? prev.filter(id => id !== bookId) : [...prev, bookId]);
  }

  //kitab yenilə 
  function handleUpdateBookStatus(bookId, status) {
    setReadingStats(prev => ({
      ...prev, [bookId]: { ...prev[bookId], status, updatedAt: new Date().toISOString() }
    }));
  }

  return (
    <div>
      <BookHeader
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        handleSearch={handleSearch}
      />

      <FavoriteBooksSection
        favorites={favorites}
        books={books}
        openBook={openBook}
        toggleFavorite={toggleFavorite}
      />

      <BookList
        books={books}
        favorites={favorites}
        openBook={openBook}
        toggleFavorite={toggleFavorite}
      />

      <BookReadingTracker
        books={books}
        onUpdateBookStatus={handleUpdateBookStatus}
      />
    </div>
  );
}

export default Book;