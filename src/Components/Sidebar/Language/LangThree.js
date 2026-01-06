import './LangThree.css';

function LangThree() {
    const otherLang = [
        { flag: '🇫🇷', name: 'Fransız dili', students: '283 B' },
        { flag: '🇰🇷', name: 'Koreya dili', students: '168 B' },
        { flag: '🇮🇹', name: 'İtalyan dili', students: '147 B' },
        { flag: '🇯🇵', name: 'Yapon dili', students: '109 B' },
        { flag: '🇨🇳', name: 'Çin dili', students: '98 B' },
        { flag: '🇵🇹', name: 'Portuqal dili', students: '76 B' },
        { flag: '🇦🇪', name: 'Ərəb dili', students: '65 B' },
        { flag: '🇹🇷', name: 'Türk dili', students: '54 B' }
    ];

    return (
        <div className="lang-three-box">
            <div className="lang-three-section">
                <h3 className="lang-three-title">
                    <i class="bi bi-list-ul"></i> Digər Populyar Dillər
                </h3>

                <div className="lang-three-grid">
                    {otherLang.map((lang, index) => (
                        <div className="lang-three-item" key={index}>
                            <div className="lang-three-flag">{lang.flag}</div>
                            <h4 className="lang-three-name">{lang.name}</h4>
                            <div className="lang-three-label">{lang.students}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LangThree;