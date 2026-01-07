import { Routes, Route, Link, NavLink } from "react-router-dom";
import "./login.css";
import Logup from './Login.js';


function Login() {
    return (
        <div>
            <div className="login-container">
                <div className="login-column-one">
                    <h2 className="login-column-one-h2-1" >Gələcəyin Fitness & Öyrənmə Platforması</h2>
                    <div>
                        <div className="login-one-box">
                            <div className="login-one-box-logo">
                               <i class="bi bi-journal-bookmark"></i>
                            </div>
                            <div>
                                <p className="login-one-box-p1" >İdman / Proqramlaşdırma / Musiqi / Kitab / Dil kursları</p>
                            </div>
                        </div>
                        <div className="login-one-box">
                            <div className="login-one-box-logo">
                                <i class="bi bi-robot"></i>
                            </div>
                            <div>
                                <p className="login-one-box-p1" >Süni İntellektlə güclü öyrənmə</p>
                                <p>Fərdiləşdirilmiş öyrənmə yolu</p>
                            </div>
                        </div>
                        <div className="login-one-box">
                            <div className="login-one-box-logo">
                                <i class="bi bi-box"></i>
                            </div>
                            <div>
                                <p className="login-one-box-p1" >Ağıllı planlayıcı</p>
                                <p>AI-optimallaşdırılmış cədvəl</p>
                            </div>
                        </div>
                        <div className="login-one-box">
                            <div className="login-one-box-logo">
                                <i class="bi bi-controller"></i>
                            </div>
                            <div>
                                <p className="login-one-box-p1" >Oyunlaşdırma</p>
                                <p>Əyləncəli nailiyyət sistemi</p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="login-column-two">
                    <div className="login-logup">
                        <div>
                            <NavLink to="/login" className="login-logup-link"> <i class="bi bi-box-arrow-in-right"></i>Daxil ol</NavLink>
                        </div>
                        <div>

                            <NavLink to="/logup" className="login-logup-link"> <i class="bi bi-person-plus"></i> Qeydiyatdan keç</NavLink>
                        </div>
                    </div>


                    <div className="login-h2-d">Daxil ol</div>
                    <form>
    
                        <div className="login-logo1">
                            <i class="bi bi-envelope-at-fill"></i>
                            <input type="email" placeholder="Email" required />
                        </div>
                        <div className="login-logo1">
                            <input type="password" placeholder="Parol" required />
                            <i class="bi bi-lock-fill"></i>
                        </div>
                        <div className="login-chec-p">
                            <div className="login-chec">
                                <input type="checkbox" />
                                <span>Xatırla</span>
                            </div>
                        </div>
                        <button className="login-button">Daxil ol</button>
                    </form>


                </div>
            </div>
            <Routes>
                <Route path="/logup" element={<Logup />} />
                <Route path="/login" element={<Login />} />
            </Routes>


        </div>
    );
}
export default Login;
