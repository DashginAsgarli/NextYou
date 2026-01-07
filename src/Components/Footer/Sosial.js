import Feedback from "./FeedBack";
import Faq from "./Faq"
import "./sosial.css";
function Sosial() {
    return (
        <section>
            <h1 className="social-container-h1">Əlaqə</h1>
            <div className="social-container">

                <div className="social-cards">
                    <div>
                        <i className="bi bi-github"></i>
                    </div>
                    <h2>Github</h2>
                    <div className="social-followers">---</div>
                    <a href="https://github.com/"
                        target="_blank"
                        className="social-link">
                        <i className="bi bi-link-45deg"></i>
                        <span>Follow me</span>
                    </a>
                </div>

                <div className="social-cards">
                    <div>
                        <i className="bi bi-linkedin"></i>
                    </div>
                    <h2>Linkedin</h2>
                    <div className="social-followers">---</div>
                    <a href="https://www.linkedin.com/feed/"
                        target="_blank"
                        className="social-link">
                        <i className="bi bi-link-45deg"></i>
                        <span>Connect</span>
                    </a>
                </div>
                <div className="social-cards">
                    <div>
                        <i className="bi bi-instagram"></i>
                    </div>
                    <h2>Instagram</h2>
                    <div className="social-followers">---</div>
                    <a href="https://instagram.com" target="_blank"
                        className="social-link">
                        <i className="bi bi-link-45deg"></i>
                        <span>Follow me</span>
                    </a>
                </div>
                <div className="social-cards">
                    <div>
                        <i className="bi bi-facebook"></i>
                    </div>
                    <h2>Facebook</h2>
                    <div className="social-followers">---</div>
                    <a href="https://www.facebook.com/?locale=tr_TR"
                        target="_blank"
                        className="social-link">
                        <i className="bi bi-link-45deg"></i>
                        <span>Follow me</span>
                    </a>
                </div>
            </div>
            <Feedback/>
            <Faq/>
        </section>

    );
}

export default Sosial;