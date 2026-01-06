function BookHeader({ searchQuery, setSearchQuery, handleSearch }) {
  return (
    <section className="book-one">
      <div className="book-one-h2">
        <i className="bi bi-book-fill"></i>
        <h2>Kitabxanam</h2>
      </div>
      <div className="book-search">
        
        <input
          type="text"
          placeholder="Kitab axtar..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Axtar</button>
      </div>
    </section>
  );
}

export default BookHeader;