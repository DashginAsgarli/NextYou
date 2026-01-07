import "./code.css";
import HtmlIcon from "../../İmages/code/html.png";
import CssIcon from "../../İmages/code/css.svg";
import JsIcon from "../../İmages/code/javascript.png";
import Python from "../../İmages/code/python.png";
import Java from "../../İmages/code/java.webp";
import W3CSS from "../../İmages/code/CSS3.png";
import Boots from "../../İmages/code/Bootstrap.svg.png";
import C from "../../İmages/code/C.png";
import Csharp from "../../İmages/code/C-Sharp.png";
import Cplus from "../../İmages/code/C++.svg.png";
import Excel from "../../İmages/code/excel.svg";
import Jquery from "../../İmages/code/jquery.png";
import MySql from "../../İmages/code/mysql.png";
import Php from "../../İmages/code/php.png";
import ReactIcon from "../../İmages/code/reactjs.png";
import Xml from "../../İmages/code/xml.png";
import CodeMap from './codeMap'
import CodeFrt from './codeFutr'

import { Routes, Route, Link, NavLink } from "react-router-dom";


import CodeEditor from './codeEditor'
function Code() {
    return (
        <div>
            <div>
                <CodeMap />

                <section className="code-one">
                    <h2 className="code-one-h2">
                        <i class="bi bi-code-slash"></i>
                        Proqramlaşdırma öyrenin
                    </h2>
                    <div className="code-text">
                        <i class="bi bi-question-circle " ></i>
                        <p>Hardan başlayacağınızdan əmin deyilsiniz?</p>
                    </div>
                </section>

                <section className="code-two">
                    <h2>
                        <i class="bi bi-laptop"></i>
                        Proqramlaşdırma Dilləri
                    </h2>
                    <div className="code-two-container">
                        <div className="code-two-box">
                            <img src={HtmlIcon} alt="html" />
                            <h2>HTML</h2>
                            <div><Link to="/codeHtml" className="code-two-link"> Öyrən</Link></div>
                        </div>
                        <div className="code-two-box">
                            <img src={CssIcon} alt="html" />
                            <h2>CSS</h2>
                            <div><Link className="code-two-link"> Öyrən</Link></div>
                        </div>
                        <div className="code-two-box">
                            <img src={JsIcon} alt="html" />
                            <h2>JavaScript</h2>
                            <div><Link className="code-two-link"> Öyrən</Link></div>
                        </div>
                        <div className="code-two-box">
                            <img src={ReactIcon} alt="logo" />
                            <h2>React</h2>
                            <div><Link className="code-two-link"> Öyrən</Link></div>
                        </div>
                        <div className="code-two-box">
                            <img src={W3CSS} alt="html" />
                            <h2>W3.CSS</h2>
                            <div><Link className="code-two-link"> Öyrən</Link></div>
                        </div>
                        <div className="code-two-box">
                            <img src={Python} alt="html" />
                            <h2>Python</h2>
                            <div><Link className="code-two-link"> Öyrən</Link></div>
                        </div>
                        <div className="code-two-box">
                            <img src={Java} alt="html" />
                            <h2>Java</h2>
                            <div><Link className="code-two-link"> Öyrən</Link></div>
                        </div>
                        <div className="code-two-box">
                            <img src={Jquery} alt="logo" />
                            <h2>Jquery</h2>
                            <div><Link className="code-two-link"> Öyrən</Link></div>
                        </div>
                        <div className="code-two-box">
                            <img src={Php} alt="logo" />
                            <h2>Php</h2>
                            <div><Link className="code-two-link"> Öyrən</Link></div>
                        </div>
                        <div className="code-two-box">
                            <img src={Xml} alt="logo" />
                            <h2>XML</h2>
                            <div><Link className="code-two-link"> Öyrən</Link></div>
                        </div>
                        <div className="code-two-box">
                            <img src={C} alt="logo" />
                            <h2>C</h2>
                            <div><Link className="code-two-link"> Öyrən</Link></div>
                        </div>
                        <div className="code-two-box">
                            <img src={Cplus} alt="logo" />
                            <h2>C++</h2>
                            <div><Link className="code-two-link"> Öyrən</Link></div>
                        </div>

                        <div className="code-two-box">
                            <img src={Csharp} alt="logo" />
                            <h2>C#</h2>
                            <div><Link className="code-two-link"> Öyrən</Link></div>
                        </div>

                        <div className="code-two-box">
                            <img src={Excel} alt="logo" />
                            <h2>Excel</h2>
                            <div><Link className="code-two-link"> Öyrən</Link></div>
                        </div>
                        <div className="code-two-box">
                            <img src={Boots} alt="logo" />
                            <h2>Bootstrap</h2>
                            <div><Link className="code-two-link"> Öyrən</Link></div>
                        </div>
                        <div className="code-two-box">
                            <img src={MySql} alt="logo" />
                            <h2>MySql</h2>
                            <div><Link className="code-two-link"> Öyrən</Link></div>
                        </div>
                    </div>

                </section>
                <CodeEditor />

                <CodeFrt />

                <section className="code-tree">
                    <div>
                        <h3>
                            <i class="bi bi-patch-check"></i>
                            Sertifikat alın
                        </h3>
                        <p>NextYou Sertifikatları ilə bacarıqlarınızı sənədləşdirin </p>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Code;