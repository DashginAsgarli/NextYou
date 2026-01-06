import { useState, useEffect } from 'react';
import './codeHtml.css';

function HtmlLessonView({ lesson, onBack, isCompleted, onComplete }) {
  const [locallyCompleted, setLocallyCompleted] = useState(isCompleted);
  
  useEffect(() => {
    setLocallyCompleted(isCompleted);
  }, [isCompleted]);

  const handleCompleteLesson = () => {
    if (!locallyCompleted && onComplete) {
      onComplete(lesson.id);
      setLocallyCompleted(true);
    }
  };

  return (
    <div className="html-tutorial-lesson-view">
      <div className="html-tutorial-view-header">
        <button onClick={onBack} className="html-tutorial-back-btn">
          <i className="bi bi-arrow-left"></i> Dərslərə Qayıt
        </button>
        
        <div className="html-tutorial-lesson-status">
          {locallyCompleted ? (
            <span className="html-tutorial-status-badge completed">
              <i className="bi bi-check-circle-fill"></i> Tamamlandı
            </span>
          ) : (
            <span className="html-tutorial-status-badge in-progress">
              <i className="bi bi-clock"></i> Davam edir
            </span>
          )}
        </div>
      </div>

      <div className="html-tutorial-lesson-detail">
        <div className="html-tutorial-lesson-header-detail">
          <div className="html-tutorial-lesson-tags">
            <span className="html-tutorial-lesson-tag category">{lesson.category}</span>
            <span className="html-tutorial-lesson-tag level">{lesson.level}</span>
            <span className="html-tutorial-lesson-tag xp">
              <i className="bi bi-star-fill"></i> {lesson.points} XP
            </span>
          </div>
          
          <h1 className="html-tutorial-lesson-title-detail">
            {lesson.title}
            {locallyCompleted && (
              <span className="html-tutorial-title-check">
                <i className="bi bi-check-circle-fill"></i>
              </span>
            )}
          </h1>
          
          <div className="html-tutorial-lesson-meta-detail">
            <span className="meta-item">
              <i className="bi bi-clock"></i> {lesson.duration}
            </span>
            <span className="meta-item">
              <i className="bi bi-filetype-html"></i> HTML Dərsi
            </span>
            <span className="meta-item">
              <i className="bi bi-bar-chart"></i> {lesson.level} Səviyyə
            </span>
          </div>
        </div>

        <div className="html-tutorial-lesson-sections">
          <section className="html-tutorial-section">
            <div className="section-header">
              <i className="bi bi-info-circle-fill section-icon"></i>
              <h3 className="section-title">Dərsin Təsviri</h3>
            </div>
            <div className="section-content">
              <p>{lesson.content.description}</p>
            </div>
          </section>

          <section className="html-tutorial-section">
            <div className="section-header">
              <i className="bi bi-journal-text section-icon"></i>
              <h3 className="section-title">Nəzəri Məlumat</h3>
            </div>
            <div className="section-content">
              <p>{lesson.content.theory}</p>
            </div>
          </section>

          {lesson.content.examples && lesson.content.examples.length > 0 && (
            <section className="html-tutorial-section">
              <div className="section-header">
                <i className="bi bi-code-slash section-icon"></i>
                <h3 className="section-title">Kod Nümunələri</h3>
              </div>
              <div className="section-content">
                <div className="html-tutorial-code-examples">
                  {lesson.content.examples.map((example, index) => (
                    <div key={index} className="code-example-container">
                      <div className="code-example-header">
                        <span>Nümunə {index + 1}</span>
                        <button 
                          className="copy-code-btn"
                          onClick={() => {
                            navigator.clipboard.writeText(example);
                            alert('Kod kopyalandı!');
                          }}
                        >
                          <i className="bi bi-copy"></i> Kopyala
                        </button>
                      </div>
                      <pre className="html-tutorial-code-block">
                        <code>{example}</code>
                      </pre>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          <section className="html-tutorial-section complete-section">
            <div className="completion-container">
              {locallyCompleted ? (
                <div className="already-completed-card">
                  <h4>Təbriklər! 🎉</h4>
                  <p>"{lesson.title}" dərsini uğurla tamamladınız.</p>
                  
                  <div className="completion-details">
                    <div className="xp-badge">
                      <i className="bi bi-star-fill"></i>
                      <span>{lesson.points} XP qazandınız</span>
                    </div>
                    <div className="date-badge">
                      <i className="bi bi-calendar-check"></i>
                      <span>Tamamlanma: {new Date().toLocaleDateString('az-AZ')}</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="completion-card">
                  <button 
                    onClick={handleCompleteLesson}
                    className="complete-lesson-btn"
                  >
                    Dərsi Tamamla
                  </button>
                  
                  <div className="xp-note">
                    <i className="bi bi-star"></i>
                    <span>Tamamladıqda: <strong>{lesson.points} XP</strong> qazanacaqsınız!</span>
                  </div>
                </div>
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default HtmlLessonView;