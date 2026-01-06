import './LangTwo.css';
function LangTwo() {
    const topLang = [
        {
            id: 1,
            name: "İngilis dili",
            students: "8,53 mln",
            rank: 1
        },
        {
            id: 2,
            name: "Alman dili",
            students: "1,82 mln",
            rank: 2
        },
        {
            id: 3,
            name: "Rus dili",
            students: "979 min",
            rank: 3
        },
        {
            id: 4,
            name: "İspan dili",
            students: "304 min",
            rank: 4
        }
    ];
    return (
        <div className="lang-two-box">
            <div className="lang-two-header">
                <h2 className="lang-two-title">
                    <i className="fas fa-globe-europe me-2"></i> Populyar Dillar
                </h2>
            </div>
            <div className="lang-two-grid">
                {topLang.map(lang => (
                    <div className="lang-two-card" key={lang.id}>
                        <div className="lang-two-flag">
                            <i class="bi bi-flag-fill"></i>
                        </div>
                        <h3 className="lang-two-name">{lang.name}</h3>
                        <div className="lang-two-count">{lang.students}</div>
                        <div className="lang-two-badge">{lang.rank}</div>
                    </div>
                ))}
            </div>
            <div className="lang-two-divider"></div>
        </div>
    );
};
export default LangTwo;
