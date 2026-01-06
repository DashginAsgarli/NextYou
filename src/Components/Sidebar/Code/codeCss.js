import { useState, useEffect } from 'react';
import './codeHtml.css';
import CssView from './codeCssView';
import cssLessons from './codeCss.json';
import './codeCss.css'

function Css() {
    const [lessons, setLessons] = useState([]);
    const [completedLessons, setCompletedLessons] = useState([]);
    const [currentLesson, setCurrentLesson] = useState(null);
    const [progress, setProgress] = useState(0);
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [searchTerm, setSearchTerm] = useState("");
    const categories = [
        { id: 'all', name: 'Hamısı', icon: 'bi bi-grid', count: cssLessons.length },
        { id: 'Əsaslar', name: 'Əsaslar', icon: 'bi bi-file-earmark-text', count: cssLessons.filter(l => l.category === 'Əsaslar').length },
        { id: 'Selektorlar', name: 'Selektorlar', icon: 'bi bi-code-slash', count: cssLessons.filter(l => l.category === 'Selektorlar').length },
        { id: 'Box Model', name: 'Box Model', icon: 'bi bi-square', count: cssLessons.filter(l => l.category === 'Box Model').length },
        { id: 'Flexbox', name: 'Flexbox', icon: 'bi bi-layout-wtf', count: cssLessons.filter(l => l.category === 'Flexbox').length },
        { id: 'Grid', name: 'Grid', icon: 'bi bi-grid-3x3', count: cssLessons.filter(l => l.category === 'Grid').length },
        { id: 'Animasiyalar', name: 'Animasiyalar', icon: 'bi bi-magic', count: cssLessons.filter(l => l.category === 'Animasiyalar').length },
        { id: 'Responsive', name: 'Responsive', icon: 'bi bi-phone', count: cssLessons.filter(l => l.category === 'Responsive').length }
    ];

    useEffect(function () {
        setLessons(cssLessons);
        const saved = JSON.parse(
            localStorage.getItem("completed_css_lessons") || "[]"
        );
        setCompletedLessons(saved);
        setProgress((saved.length / cssLessons.length) * 100);
    }, []);

    function startLesson(lesson) { setCurrentLesson(lesson) }

    function completeLesson(lessonId) {
        if (completedLessons.indexOf(lessonId) !== -1) {
            return;
        }
        const updated = completedLessons.concat(lessonId);
        setCompletedLessons(updated);
        localStorage.setItem(
            "completed_css_lessons",
            JSON.stringify(updated)
        );
        setProgress((updated.length / lessons.length) * 100);
        const lesson = lessons.find(function (l) {
            return l.id === lessonId;
        });
        const xp = Number(localStorage.getItem("total_xp") || 0);
        localStorage.setItem("total_xp", xp + lesson.points);
    }

    function resetProgress() {
        setCompletedLessons([]);
        localStorage.removeItem("completed_css_lessons");
        setProgress(0);
    }

    const filteredLessons = lessons.filter(function (lesson) {
        const categoryOk =
            selectedCategory === "all" ||
            lesson.category === selectedCategory;

        const searchOk =
            lesson.title.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1 ||
            lesson.content.description
                .toLowerCase()
                .indexOf(searchTerm.toLowerCase()) !== -1;

        return categoryOk && searchOk;
    });

    if (currentLesson) {
        return (
            <CssView
                lesson={currentLesson}
                onBack={function () {
                    setCurrentLesson(null);
                }}
                onComplete={completeLesson}
                isCompleted={
                    completedLessons.indexOf(currentLesson.id) !== -1
                }
            />
        );
    }

    return (
        <div className="html-tutorial-container css-tutorial-container">
            <div className="html-tutorial-header">
                <h2 className="html-tutorial-title">
                    <i className="bi bi-filetype-css"></i> CSS Dərsliyi
                </h2>
                <p className="html-tutorial-subtitle">Veb dizaynın əsaslarını interaktiv şəkildə öyrənin</p>
            </div>

            <div className="html-tutorial-search">
                <div className="html-tutorial-search-box">
                    <i className="bi bi-search"></i>
                    <input
                        type="text"
                        placeholder="Dərs axtar..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    {searchTerm && (
                        <button onClick={() => setSearchTerm('')} className="html-tutorial-clear-search">
                            <i className="bi bi-x"></i>
                        </button>
                    )}
                </div>
                <div className="html-tutorial-filter">
                    <i className="bi bi-filter"></i>
                    <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
                        {categories.map(cat => (
                            <option key={cat.id} value={cat.id}>
                                {cat.name} ({cat.count})
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="html-tutorial-overall-progress">
                <div className="html-tutorial-progress-header">
                    <h4>
                        <i className="bi bi-graph-up"></i> Ümumi İlerləmə
                    </h4>
                    <span className="html-tutorial-progress-percentage">{progress}%</span>
                </div>
                <div className="html-tutorial-progress-bar">
                    <div
                        className="html-tutorial-progress-fill"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
                <div className="html-tutorial-progress-stats">
                    <span>{completedLessons.length} / {lessons.length} dərs tamamlandı</span>
                    {completedLessons.length > 0 && (
                        <button onClick={resetProgress} className="html-tutorial-reset-btn">
                            <i className="bi bi-arrow-clockwise"></i> Sıfırla
                        </button>
                    )}
                </div>
            </div>

            <div className="html-tutorial-categories">
                {categories.map(category => (
                    <button
                        key={category.id}
                        className={`html-tutorial-category-btn ${selectedCategory === category.id ? 'active' : ''}`}
                        onClick={() => setSelectedCategory(category.id)}
                    >
                        <i className={category.icon}></i>
                        <span>{category.name}</span>
                        <span className="html-tutorial-category-count">{category.count}</span>
                    </button>
                ))}
            </div>

            <div className="html-tutorial-lessons-grid">
                {filteredLessons.map(lesson => (
                    <div
                        key={lesson.id}
                        className={`html-tutorial-lesson-card ${completedLessons.includes(lesson.id) ? 'completed' : ''}`}
                        onClick={() => startLesson(lesson)}
                    >
                        <div className="html-tutorial-lesson-header">
                            <div className="html-tutorial-lesson-badge">
                                <span className="html-tutorial-lesson-level">{lesson.level}</span>
                                <span className="html-tutorial-lesson-category">{lesson.category}</span>
                            </div>
                            {completedLessons.includes(lesson.id) && (
                                <div className="html-tutorial-completed-badge">
                                    <i className="bi bi-check-circle"></i>
                                </div>
                            )}
                        </div>

                        <div className="html-tutorial-lesson-icon">
                            <i className={lesson.icon}></i>
                        </div>

                        <div className="html-tutorial-lesson-content">
                            <h3 className="html-tutorial-lesson-title">{lesson.title}</h3>
                            <p className="html-tutorial-lesson-desc">{lesson.content.description.substring(0, 80)}...</p>

                            <div className="html-tutorial-lesson-meta">
                                <span className="html-tutorial-lesson-duration">
                                    <i className="bi bi-clock"></i> {lesson.duration}
                                </span>
                                <span className="html-tutorial-lesson-points">
                                    <i className="bi bi-star"></i> {lesson.points} XP
                                </span>
                            </div>
                        </div>

                        <div className="html-tutorial-lesson-footer">
                            <button className="html-tutorial-start-lesson-btn">
                                {completedLessons.includes(lesson.id) ? 'Təkrar Oxu' : 'Dərsə Başla'}
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="html-tutorial-stats">
                <div className="html-tutorial-stat-card">
                    <i className="bi bi-filetype-css"></i>
                    <h4>{lessons.length}</h4>
                    <p>Ümumi Dərs</p>
                </div>
                <div className="html-tutorial-stat-card">
                    <i className="bi bi-check-circle"></i>
                    <h4>{completedLessons.length}</h4>
                    <p>Tamamlanan</p>
                </div>
                <div className="html-tutorial-stat-card">
                    <i className="bi bi-clock-history"></i>
                    <h4>{lessons.reduce((sum, lesson) => sum + parseInt(lesson.duration), 0)} dəq</h4>
                    <p>Ümumi Vaxt</p>
                </div>
                <div className="html-tutorial-stat-card">
                    <i className="bi bi-trophy"></i>
                    <h4>{completedLessons.reduce((sum, id) => {
                        const lesson = lessons.find(l => l.id === id);
                        return sum + (lesson?.points || 0);
                    }, 0)} XP</h4>
                    <p>Yığılan Xal</p>
                </div>
            </div>
        </div>
    );
}

export default Css;