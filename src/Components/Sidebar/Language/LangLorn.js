import { useState } from "react";
import LangLornView from "./LangLornView";
import langData from "../../../Data/langLorn.json";
import "./langlorn.css";

function LangLorn() {
    const [lessons] = useState(langData.grammarLessons);
    const [activeLesson, setActiveLesson] = useState(null);

    function startLesson(lesson) {
        setActiveLesson(lesson);
    }

    if (activeLesson) {
        return (
            <LangLornView
                lesson={activeLesson}
                onBack={function () { setActiveLesson(null); }}
            />
        );
    }

    return (
        <div className="lang-eleven-container">
            <div className="lang-eleven-header">
                <h2 className="lang-eleven-title">
                    <i className="bi bi-journal-text"></i> İngilis Grammatikası
                </h2>
                <p className="lang-eleven-subtitle">Təməl qrammatika qaydalarını interaktiv şəkildə öyrənin</p>
            </div>

            <div className="lang-eleven-lessons-grid">
                {lessons.map(function (lesson) {
                    return (
                        <div
                            key={lesson.id}
                            className="lang-eleven-lesson-card"
                            onClick={function () { startLesson(lesson); }}
                        >
                            <div className="lang-eleven-lesson-header">
                                <div className="lang-eleven-lesson-badge">
                                    <span className="lang-eleven-lesson-level">{lesson.level}</span>
                                    <span className="lang-eleven-lesson-category">{lesson.category}</span>
                                </div>
                            </div>

                            <div className="lang-eleven-lesson-content">
                                <h3 className="lang-eleven-lesson-title">{lesson.title}</h3>
                                <p className="lang-eleven-lesson-desc">
                                    {lesson.content.description.slice(0, 80)}...
                                </p>
                                <div className="lang-eleven-lesson-meta">
                                    <span>
                                        <i className="bi bi-clock"></i> {lesson.duration} dəq
                                    </span>
                                    <span>
                                        <i className="bi bi-star"></i> {lesson.points} XP
                                    </span>
                                </div>
                            </div>

                            <div className="lang-eleven-lesson-footer">
                                <button className="lang-eleven-start-lesson-btn">Dərsə Başla</button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default LangLorn;