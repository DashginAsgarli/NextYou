import { useState, useEffect } from 'react';
import './codeHtml.css';
import HtmlLessonView from './HtmlLessonView';
import htmlLessons from './../../../Data/codeHtml.json';

function Html() {
    const [lessons, setLessons] = useState([]);
    const [completedLessons, setCompletedLessons] = useState([]);
    const [currentLesson, setCurrentLesson] = useState(null);
    const [progress, setProgress] = useState(0);
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [searchTerm, setSearchTerm] = useState("");

    const categories = [
        {
            id: "all",
            name: "Hamısı",
            icon: "bi bi-grid",
            count: htmlLessons.length
        },
        {
            id: "Əsaslar",
            name: "Əsaslar",
            icon: "bi bi-file-earmark-text",
            count: htmlLessons.filter(function (lesson) {
                return lesson.category === "Əsaslar";
            }).length
        },
        {
            id: "Formatlaşdırma",
            name: "Formatlaşdırma",
            icon: "bi bi-type",
            count: htmlLessons.filter(function (lesson) {
                return lesson.category === "Formatlaşdırma";
            }).length
        },
        {
            id: "Struktur",
            name: "Struktur",
            icon: "bi bi-diagram-3",
            count: htmlLessons.filter(function (lesson) {
                return lesson.category === "Struktur";
            }).length
        },
        {
            id: "Formalar və Media",
            name: "Formalar & Media",
            icon: "bi bi-camera-video",
            count: htmlLessons.filter(function (lesson) {
                return lesson.category === "Formalar və Media";
            }).length
        }
    ];

    useEffect(function () {
        setLessons(htmlLessons);

        const savedLessons = JSON.parse(localStorage.getItem("completed_html_lessons") || "[]");
        setCompletedLessons(savedLessons);

        const percent = (savedLessons.length / htmlLessons.length) * 100;
        setProgress(percent);
    }, []);

    function startLesson(lesson) { setCurrentLesson(lesson); }

    function completeLesson(lessonId) {
        if (completedLessons.indexOf(lessonId) !== -1) {
            return;
        }
        const newCompletedLessons = completedLessons.concat(lessonId);
        setCompletedLessons(newCompletedLessons);

        localStorage.setItem("completed_html_lessons", JSON.stringify(newCompletedLessons));

        const percent = (newCompletedLessons.length / lessons.length) * 100;
        setProgress(percent);

        const lesson = lessons.find(function (item) { return item.id === lessonId; });

        const oldXp = Number(localStorage.getItem("total_xp") || 0);

        localStorage.setItem("total_xp", oldXp + lesson.points);
    }

    function resetProgress() {
        setCompletedLessons([]);
        localStorage.removeItem("completed_html_lessons");
        setProgress(0);
    }

    const filteredLessons = lessons.filter(function (lesson) {
        const categoryMatch = selectedCategory === "all" || lesson.category === selectedCategory;
        const searchMatch =
            lesson.title.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1 ||
            lesson.content.description.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1;
        return categoryMatch && searchMatch;
    });

    if (currentLesson) {
        return (
            <HtmlLessonView
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
        <div className="html-tutorial-container">
            <div className="html-tutorial-header">
                <h2 className="html-tutorial-title">
                    <i className="bi bi-filetype-html"></i> HTML Dərsliyi
                </h2>
                <p className="html-tutorial-subtitle">Veb inkişafının əsasını interaktiv şəkildə öyrənin</p>
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
                    <i className="bi bi-filetype-html"></i>
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

export default Html;