import "./Parameters.css";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import Language from '../Sidebar/Language/Language';
import Code from '../Sidebar/Code/Code';
import Book from '../Sidebar/Book/Book';
import Music from '../Sidebar/Music/Music';
import Planner from './Planner/Planner';

import About from '../Footer/About'
 
function Parameters() {
    return (
        <div>
            <About/>
            <div className="parameters-container">
                <div className="parameters-box">
                    <p><i class="bi bi-translate"></i></p>
                    <p><NavLink to="/language" className="parameters-text">
                        Dil</NavLink></p>
                    <ul>
                        <li>Gündəlik öyrənmə hədəfləri</li>
                        <li>Tələffüz inkişafı</li>
                        <li>Söz ehtiyatı statistikası</li>
                        <li>Səsli məşq</li>
                        <li>Şəkillə söz öyrənmə</li>
                        <li>Gündəlik vərdiş yaratma</li>
                    </ul>
                </div>
                <div className="parameters-box">
                    <p><i class="bi bi-code-slash"></i></p>
                    <p><NavLink to="/code" className="parameters-text parametrs-color">
                        Kod</NavLink></p>
                    <ul>
                        <li>Kod strukturlaşdırma</li>
                        <li>Proyekt portfeli</li>
                        <li>Kod generatoru</li>
                        <li>Alqoritm optimallaşdırması</li>
                        <li>Optimallaşdırma tövsiyələri</li>
                        <li>Kod keyfiyyəti analizi</li>
                    </ul>
                </div>

                <div className="parameters-box">
                    <p><i class="bi bi-book-half"></i></p>
                    <p><NavLink to="/book" className="parameters-text parametrs-color">
                        Kitab</NavLink></p>
                    <ul>
                        <li>Azərbaycan və xarici ədəbiyyat</li>
                        <li>Tələffüz inkişafı</li>
                        <li>Janr, müəllif, mövzu filtrləmə</li>
                        <li>Sürət, anlama, dərinlik analizi</li>
                        <li>Audiokitablar</li>
                        <li>Personaj, süjet, tema analizi</li>
                        
                    </ul>
                </div>
                <div className="parameters-box">
                    <p><i class="bi bi-apple-music"></i></p>
                    <p><NavLink to="/music" className="parameters-text">
                        Musiqi</NavLink></p>
                    <ul>
                        <li>Səs, ritm, not</li>
                        <li>Ruh halınıza uyğun musiqi</li>
                        <li>Səs düzəlişi</li>
                        <li>Sevimli ifaçıların stil təhlili</li>
                      
                    </ul>
                </div>
                <div className="parameters-box">
                    <p><i class="bi bi-calendar-week-fill"></i></p>
                    <p><NavLink to="/planner" className="parameters-text parametrs-color">
                        Planlayıcı</NavLink></p>
                    <ul>
                        <li>Tapşırıqlar üçün struktur</li>
                        <li>Məqsədlərə uyğun plan</li>
                        <li>Boş vaxt analizi</li>
                        <li>Tamamlanan vəzifələrin statistikası</li>
                        <li>Gündəlik/həftəlik xatırlatmalar</li>
                    </ul>
                </div>
            </div>
            <Routes>
                <Route path="/language" element={<Language />} />
                <Route path="/code" element={<Code />} />
                <Route path="/book" element={<Book />} />
                <Route path="/music" element={<Music />} />
                <Route path="/planner" element={<Planner />} />
            </Routes>
        </div>
    );
}
export default Parameters;