import './LangFour.css';
function LangFour() {
  return (
    <div className="lang-four-challenge-box">
      <div className="lang-four-challenge-header">
        <h3 className="lang-four-challenge-title">
          <i class="bi bi-trophy"></i>Gündəlik Dil Mücadiləsi
        </h3>
      </div>


      <div className="lang-four-progress-container">
        <div className="lang-four-progress-fill"></div>
      </div>

      <div className="lang-four-challenges-list">
        <div className="lang-four-challenge-item lang-four-completed">
          <div className="lang-four-challenge-check">
            <i className="fas fa-check-circle"></i>
          </div>
          <div className="lang-four-challenge-info">
            <h5>10 yeni söz</h5>
            <span className="lang-four-challenge-xp">+50 XP</span>
          </div>
        </div>

        <div className="lang-four-challenge-item lang-four-completed">
          <div className="lang-four-challenge-check">
            <i className="fas fa-check-circle"></i>
          </div>
          <div className="lang-four-challenge-info">
            <h5>25 Cümlə Tərcümələri</h5>
            <span className="lang-four-challenge-xp">+75 XP</span>
          </div>
        </div>

        <div className="lang-four-challenge-item">
          <div className="lang-four-challenge-check">
            <div className="lang-four-challenge-circle"></div>
          </div>
          <div className="lang-four-challenge-info">
            <h5>Dinləmə Məşqi</h5>
            <span className="lang-four-challenge-xp">+100 XP</span>
          </div>
        </div>

        <div className="lang-four-challenge-item">
          <div className="lang-four-challenge-check">
            <div className="lang-four-challenge-circle"></div>
          </div>
          <div className="lang-four-challenge-info">
            <h5>Danışıq Təcrübəsi</h5>
            <span className="lang-four-challenge-xp">+150 XP</span>
          </div>
        </div>
      </div>

      <div className="lang-four-challenge-rewards">
        <h5>Gündəlik Mükafatlar</h5>
        <div className="lang-four-rewards-grid">
          <div className="lang-four-reward-item">
            <div className="lang-four-reward-day">Gün 1</div>
            <i class="bi bi-gem"></i>
            <span>10 Almas</span>
          </div>
          <div className="lang-four-reward-item">
            <div className="lang-four-reward-day">Gün 2</div>
            <i class="bi bi-lightning"></i>
            <span>2x XP</span>
          </div>
          <div className="lang-four-reward-item">
            <div className="lang-four-reward-day">Gün 3</div>
            <i class="bi bi-gift"></i>
            <span>Premium</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LangFour;