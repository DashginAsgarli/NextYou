import "./HomePage.css";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import Motivation from '../Footer/Motivation';

function HomePage() {
    return (
        <div>
            <div className="home-page-container">
                <div className="hero-bg"></div>
                <div className="grid-bg"></div>

                <div className="hero-content">
                    <h1>Sənin Sürətinlə, Sənin Marağınla</h1>
                    <p>Kitabla Düşün, Musiqi ilə Hiss Et, Kodla Yarad, Dillə Əlaqə Qur</p>
                    <div className="home-page-buttons">
                        <button className="home-page-primary">
                            <i class="bi bi-stars"></i>
                            <Link to="/parameters " className="home-page-link-i">Keşfetmeye başla</Link>
                        </button>
                    </div>
                </div>
            </div>
            <div>
                <Motivation />
            </div>
        </div>
    );
}

export default HomePage;