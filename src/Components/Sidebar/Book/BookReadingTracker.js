import React, { useState } from "react";
import "./book.css";

function BookReadingTracker({ books, onUpdateBookStatus }) {
  const [statusMap, setStatusMap] = useState({});
  const [reviewMap, setReviewMap] = useState({});
  const [ratingMap, setRatingMap] = useState({});

  function updateStatus(id, status) {
    setStatusMap(prev => ({ ...prev, [id]: status }));
    onUpdateBookStatus?.(id, status);
  };

  function updateRating(id, stars) { setRatingMap(prev => ({ ...prev, [id]: stars })) };
  function updateReview(id, text) { setReviewMap(prev => ({ ...prev, [id]: text })) };

  const RatingStars = ({ bookId }) => (
    <div className="rating-stars">
      {[1, 2, 3, 4, 5].map(star => (
        <span key={star} className={`star ${star <= (ratingMap[bookId] || 0) ? 'filled' : ''}`} onClick={() => updateRating(bookId, star)}>★</span>
      ))}
    </div>
  );

  const statuses = [
    { key: "want-to-read", label: "⭐ İstək" },
    { key: "reading", label: "📖 Oxuyuram" },
    { key: "completed", label: "✅ Tamamladım" }
  ];

  return (
    <div className="reading-tracker-section">
      <h2 className="reading-tracker-section-h2">📖  Kitab Dəyərləndirmə</h2>
      <div className="tracked-books">
        {books.map(book => {
          const status = statusMap[book.id] || 'not-started';
          const review = reviewMap[book.id] || '';
          const rating = ratingMap[book.id] || 0;

          return (
            <div key={book.id} className="tracked-book-card">
              <div className="tracked-book-header">
                <img src={book.cover} alt={book.title} />
                <div>
                  <h3>{book.title}</h3>
                  <p>{book.author}</p>
                  <span className={`status-label ${status}`}>
                    {status === 'reading' ? '📖 Oxuyuram' :
                      status === 'completed' ? '✅ Tamamladım' :
                        status === 'want-to-read' ? '⭐ İstək siyahısı' : '⏳ Gözləmədə'}
                  </span>
                </div>
              </div>

              <div className="status-controls">
                {statuses.map(s => (
                  <button
                    key={s.key}
                    className={`status-btn ${status === s.key ? 'active' : ''}`}
                    onClick={() => updateStatus(book.id, s.key)}
                  >
                    {s.label}
                  </button>
                ))}
              </div>

              <div className="rating-section">
                <p>Reyting:</p>
                <RatingStars bookId={book.id} />
                <span>{rating}/5</span>
              </div>

              <div className="review-section">
                <textarea
                  placeholder="Kitab haqqında qeydləriniz..."
                  value={review}
                  onChange={e => updateReview(book.id, e.target.value)}
                />
                <button onClick={() => alert('Rəy saxlandı!')}>💾 Saxla</button>
              </div>
              {status === 'completed' && (
                <div className="completion-stats">
                  <span>⭐ {rating} ulduz</span>
                  <span>📝 {review ? 'Rəy var' : 'Rəy yoxdur'}</span>
                  <span>📅 {new Date().toLocaleDateString('az')}</span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BookReadingTracker;