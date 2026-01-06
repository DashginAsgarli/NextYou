import "./goal.css";
function Goal() {
    return (
        <div>
            <div className="goal-container">
                <div className="goal-box">
                    <div className="goal-logo">
                        <div><i class="bi bi-file-earmark-code"></i></div>
                        <p>+3%</p>
                    </div>
                    <p className="goal-p">42</p>
                    <p className="goal-p-1">Kod saatı</p>
                </div>
                <div className="goal-box">
                    <div className="goal-logo">
                        <div><i class="bi bi-book-half"></i></div>
                        <p>+8%</p>
                    </div>
                    <p className="goal-p">17</p>
                    <p className="goal-p-1">Oxunmuş kitab</p>
                </div>
                <div className="goal-box">
                    <div className="goal-logo">
                        <div><i class="bi bi-translate"></i></div>
                        <p>+15%</p>
                    </div>
                    <p className="goal-p">156</p>
                    <p className="goal-p-1">Öyrənilən söz</p>
                </div>
            </div>
        </div>
    );
}
export default Goal;