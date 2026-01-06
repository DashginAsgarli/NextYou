import "./language.css"
import LangTwo from "./LangTwo";
import LangThree from "./LangThree";
import LanguageChallenge from "./LangFour";
import LangInput from "./LangInput"
import LangGame from "./LangGame"
import LangLorn from "./LangLorn"
function Language() {
    return (
        <div>
            <section className="lang-one">
                <h2>Dil öyrənmək üçün pulsuz, əyləncəli və effektiv yol!</h2>
                <div className="lang-one-box">
                    <div>
                        <div className="lang-one-circule"><i class="bi bi-controller"></i></div>
                    </div>
                    <div>
                        <div className="lang-one-circule lang-one-circule-o"><i class="bi bi-currency-exchange"></i></div>
                    </div>
                    <div>
                        <div className="lang-one-circule"><i class="bi bi-graph-up"></i></div>
                    </div>
                </div>
            </section>
            <LangInput />
            <LangTwo />
            <LangThree />
            <LangGame/>
            <LangLorn/>
            <LanguageChallenge />

        </div>
    );
}
export default Language;