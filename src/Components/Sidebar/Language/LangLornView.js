import { useState } from "react";
import "./langlorn.css";

function LangLornView({ lesson, onBack, onComplete, isCompleted }) {
    const [answers, setAnswers] = useState({});
    const [showResult, setShowResult] = useState(false);
    const [score, setScore] = useState(0);

    function handleAnswer(index, value) {
        setAnswers({ ...answers, [index]: value });
    };

    function checkAnswers() {
        let correct = 0;
        lesson.content.practice.forEach((q, idx) => {
            if (answers[idx] === q.correct) correct++;
        });
        setScore(correct);
        setShowResult(true);

        if (!isCompleted && correct === lesson.content.practice.length) {
            onComplete(lesson.id);
        }
    };

    return (
        <div className="lang-eleven-lesson-view">
            <button onClick={onBack} className="lang-eleven-back-btn">
                <i className="bi bi-arrow-left"></i> Dərslərə Qayıt
            </button>

            <div className="lang-eleven-lesson-detail">
                <div className="lang-eleven-lesson-header-detail">
                    <div className="lang-eleven-lesson-tags">
                        <span className="lang-eleven-lesson-tag">{lesson.category}</span>
                        <span className="lang-eleven-lesson-tag">{lesson.level}</span>

                    </div>
                    <h2 className="lang-eleven-lesson-title-detail">{lesson.title}</h2>
                    <div className="lang-eleven-lesson-meta-detail">
                        <span><i className="bi bi-clock"></i> {lesson.duration}</span>
                        <span><i className="bi bi-star"></i> {lesson.points} XP</span>
                    </div>
                </div>

                <section className="lang-eleven-section">
                    <h3 className="lang-eleven-section-title">
                        <i className="bi bi-info-circle"></i> Təsvir
                    </h3>
                    <p>{lesson.content.description}</p>
                </section>

                <section className="lang-eleven-section">
                    <h3 className="lang-eleven-section-title">
                        <i className="bi bi-calculator"></i> Formula
                    </h3>
                    <code>{lesson.content.formula}</code>
                </section>

                <section className="lang-eleven-section">
                    <h3 className="lang-eleven-section-title">
                        <i className="bi bi-chat-square-quote"></i> Nümunələr
                    </h3>
                    {lesson.content.examples.map((ex, idx) => (
                        <p key={idx}>{ex}</p>
                    ))}
                </section>
                <section className="lang-eleven-section">
                    <h3 className="lang-eleven-section-title">
                        <i className="bi bi-list-check"></i> Qaydalar
                    </h3>
                    <ul>
                        {lesson.content.rules.map((rule, idx) => (
                            <li key={idx}>{rule}</li>
                        ))}
                    </ul>
                </section>

                <section className="lang-eleven-section">
                    <h3 className="lang-eleven-section-title">
                        <i className="bi bi-exclamation-triangle"></i> Ümumi Səhvlər
                    </h3>
                    {lesson.content.commonMistakes.map((m, idx) => (
                        <div key={idx} className="common-mistake-item">
                            <p>{m}</p>
                        </div>
                    ))}
                </section>

                <section className="lang-eleven-section">
                    <h3 className="lang-eleven-section-title">
                        <i className="bi bi-pencil-square"></i> Məşq
                    </h3>
                    {!showResult ? (
                        <div className="practice-questions">
                            {lesson.content.practice.map((q, idx) => (
                                <div key={idx} className="question-block">
                                    <p className="question-text">{idx + 1}. {q.question}</p>
                                    <div className="options-container">
                                        {q.options.map((opt, oIdx) => (
                                            <label key={oIdx} className="option-label">
                                                <input
                                                    type="radio"
                                                    name={`q-${idx}`}
                                                    value={opt}
                                                    checked={answers[idx] === opt}
                                                    onChange={() => handleAnswer(idx, opt)}
                                                />
                                                <span className="option-text">{opt}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            ))}
                            <button
                                onClick={checkAnswers}
                                className="check-answers-btn"
                                disabled={Object.keys(answers).length !== lesson.content.practice.length}
                            >
                                <i className="bi bi-check-circle"></i> Cavabları Yoxla
                            </button>
                        </div>
                    ) : (
                        <div className="results-section">
                            <h4 className="score-title">
                                Nəticə: {score} / {lesson.content.practice.length}
                            </h4>
                            <div className="score-bar">
                                <div
                                    className="score-fill"
                                    style={{ width: `${(score / lesson.content.practice.length) * 100}%` }}
                                />
                            </div>
                            <div className="answers-review">
                                {lesson.content.practice.map((q, idx) => (
                                    <div key={idx} className="answer-review-item">
                                        <p className="review-question">{idx + 1}. {q.question}</p>
                                        <p className="user-answer">
                                            Sizin cavabınız: <strong>{answers[idx] || "Cavab vermədiniz"}</strong>
                                        </p>
                                        <p className="correct-answer">
                                            Doğru cavab: <strong>{q.correct}</strong>
                                        </p>
                                        <p className={`answer-status ${answers[idx] === q.correct ? 'correct' : 'wrong'}`}>
                                            {answers[idx] === q.correct ? '✓ Doğru' : '✗ Yanlış'}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </section>
            </div>
        </div>
    );
}

export default LangLornView;