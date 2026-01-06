import './App.css';
import "./sidebar.css";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import Logo from './Components/Header/Logo';
import HomePage from './Components/Header/HomePage';
import Planner from './Components/Header/Planner/Planner';
import Parameters from './Components/Header/Parameters';
import Profil from './Components/Header/Profil';
import { useState } from "react";
import Music from './Components/Sidebar/Music/Music';
import Language from './Components/Sidebar/Language/Language';
import Login from './Components/Sidebar/Login/Login';
import Logup from './Components/Sidebar/Login/Logup';

import Code from './Components/Sidebar/Code/Code';
import Book from './Components/Sidebar/Book/Book';

import Theme from './Components/Theme/Theme';

import Html from './Components/Sidebar/Code/codeHtml';
import Css from './Components/Sidebar/Code/codeCss'
import Js from './Components/Sidebar/Code/codeJs'

import Social from './Components/Footer/Sosial';
import CodeMap from './Components/Sidebar/Code/codeMap';
import CodeMapDatale from './Components/Sidebar/Code/codeMapDatale';




function App() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <header>
        <div><Logo /></div>
        <div className='nav'>
          <div className='all-icons'>
            <i class="bi bi-house-fill"></i>
            <NavLink to="/" className="icon-text">Əsas Səhifə</NavLink>
          </div>
          <div className='all-icons'>
            <i class="bi bi-apple-music"></i>
            <NavLink to="/music" className="icon-text">Musiqi</NavLink>
          </div>
          <div className='all-icons'>
            <i class="bi bi-book-half"></i>
            <NavLink to="/book" className="icon-text">Kitabxana</NavLink>
          </div>
          <div className='all-icons'>
            <i class="bi bi-mortarboard"></i>
            <NavLink to="/language" className="icon-text">Dil kursları</NavLink>
          </div>
          <div className='all-icons'>
            <i class="bi bi-code-slash"></i>
            <NavLink to="/code" className="icon-text">Proqramlaşdırma</NavLink>
          </div>
        </div>


        <div className="icon-profil" onClick={() => setOpen(!open)}>
          <i className="bi bi-person-circle"></i>
        </div>

      </header>
      <div className={`sidebar ${open ? "open" : ""}`}>
        <div className="sidebar-profil" onClick={() => setOpen(!open)}>
          <i className="bi bi-person-circle"></i>
        </div>
        <Profil />
        <hr className='sidebar-hr' />
        <div className='sidebar-logo-text'>
          <div>
            <i class="bi bi-translate"></i>
            <p>AZE/EN/RU</p>
          </div>

          <Theme />


          <div>
            <i class="bi bi-star-fill"></i>
            <p><NavLink to="/parameters" className="icon-text">Xüsusiyyətlər</NavLink></p>

          </div>
          <div>
            <i class="bi bi-calendar-week-fill"></i>
            <p><NavLink to="/planner" className="icon-text">Planlayıcı</NavLink></p>
          </div>
          <div>
            <i class="bi bi-link"></i>
            <p><NavLink to="/social" className="icon-text">Əlaqə</NavLink></p>
          </div>
          <div className='sidebar-login'>
            <button className='sidebar-login-item1'>
              <i class="bi bi-box-arrow-in-right"></i>
              <Link to="/login" className='sidebar-login-link'>Daxil ol</Link>
            </button>
          </div>

        </div>
      </div>


      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/parameters" element={<Parameters />} />
          <Route path="/planner" element={<Planner />} />
          <Route path="/music" element={<Music />} />
          <Route path="/language" element={<Language />} />
          <Route path="/login" element={<Login />} />
          <Route path="/code" element={<Code />} />
          <Route path="/book" element={<Book />} />
          <Route path="/logup" element={<Logup />} />
          <Route path="/codeHtml" element={<Html />} />
          <Route path="/codeCss" element={<Css />} />
          <Route path="/codeJs" element={<Js />} />
          <Route path="/social" element={<Social />} />
          <Route path="/codeMap" element={<CodeMap />} />
          <Route path="/courses/:courseId" element={<CodeMapDatale />} />
        </Routes>

      </main>
    </div>
  );
};
export default App;