import './Feedback.css';
function Feedback() {
    return (
        <section className="feedback-section">
            <div className="feedback-container">

                <div className="feedback-content">
                    <h2 className="feedback-title">Fikir və <br /> <span>Tövsiyələriniz</span></h2>
                    <p className="feedback-text">
                        Platformamızı təkmilləşdirmək üçün sizin rəyiniz çox önəmlidir.
                        Təkliflərinizi bizə göndərin, birlikdə inkişaf edək.
                    </p>
                    <div className="feedback-icon-box">
                        <i className="fas fa-lightbulb"></i>
                        <span>Yeni ideyalarınızı gözləyirik</span>
                    </div>
                </div>

                <div className="feedback-form-container">
                    <form className="feedback-form">
                        <div className="feedback-row">
                            <div className="feedback-group">
                                <input type="text" placeholder="Ad" />
                            </div>
                            <div className="feedback-group">
                                <input type="text" placeholder="Soyad" />
                            </div>
                        </div>

                        <div className="feedback-group">
                            <input type="email" placeholder="Gmail ünvanınız" />
                        </div>

                        <div className="feedback-group">
                            <textarea placeholder="Mesajınız və tövsiyələriniz..." rows="5"></textarea>
                        </div>

                        <button type="button" className="feedback-submit">
                            GÖNDƏR
                        </button>
                    </form>
                </div>

            </div>
        </section>
    );
};

export default Feedback;