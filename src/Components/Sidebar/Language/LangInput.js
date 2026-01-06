import { useState } from 'react';
import './langInput.css';

function LangSixDictionary() {
  const [searchTerm, setSearchTerm] = useState('');
  const [wordData, setWordData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [recentSearches, setRecentSearches] = useState([]);

  function searchWord(word) {
    setLoading(true);
    setError('');
    setWordData(null);

    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    // 
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          setError('Söz tapılmadı');
          setLoading(false);
        }
      })
      .then(data => {
        if (data) {
          const wordInfo = data[0];
          setWordData(wordInfo);

          setRecentSearches(prev => {
            const list = [wordInfo, ...prev.filter(w => w.word !== wordInfo.word)];
            return list.slice(0, 5);
          });

          setLoading(false);
        }
      });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (searchTerm.trim()) {
      searchWord(searchTerm);
    }
  }

  return (
    <div className="lang-six-container">

      <div className="lang-six-header">
        <h2 className="lang-six-title">Smart Dictionary</h2>
        <p className="lang-six-subtitle">
          İngiliscə sözlərin mənasını öyrən
        </p>
      </div>

      <form onSubmit={handleSubmit} className="lang-six-search">
        <div className="lang-six-input-group">
          <input
            className="lang-six-input"
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Söz daxil edin..."
          />
          <button
            type="submit"
            className="lang-six-search-btn"
            disabled={loading}
          >
            {loading ? 'Axtarılır...' : 'Axtar'}
          </button>
        </div>
      </form>

      {error && (
        <div className="lang-six-error">
          <p>{error}</p>
        </div>
      )}

      {wordData && (
        <div className="lang-six-results">

          <div className="lang-six-word-header">
            <div className="lang-six-word-main">
              <h3 className="lang-six-word">{wordData.word}</h3>
              <span className="lang-six-phonetic">{wordData.phonetic}</span>
            </div>
          </div>

          <div className="lang-six-meanings">
            {wordData.meanings.map((meaning, i) => (
              <div key={i} className="lang-six-meaning-card">

                <div className="lang-six-part-of-speech">
                  <span className="lang-six-pos-badge">
                    {meaning.partOfSpeech}
                  </span>
                </div>

                <div className="lang-six-definitions">
                  {meaning.definitions.slice(0, 3).map((def, j) => (
                    <div key={j} className="lang-six-definition">
                      <p className="lang-six-definition-text">
                        {def.definition}
                      </p>

                      {def.example && (
                        <p className="lang-six-example">
                          "{def.example}"
                        </p>
                      )}
                    </div>
                  ))}
                </div>

              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default LangSixDictionary;