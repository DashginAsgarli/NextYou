import { useState, useEffect } from 'react';
import './langGame.css';

function LangSevenGame() {

    const [gameState, setGameState] = useState('idle');
    const [score, setScore] = useState(0);
    const [lives, setLives] = useState(3);
    const [currentWord, setCurrentWord] = useState(null);
    const [options, setOptions] = useState([]);
    const [timeLeft, setTimeLeft] = useState(30);
    const [selectedAnswer, setSelectedAnswer] = useState(null); // Seçilmiş cavabı saxlamaq üçün
    const [answerStatus, setAnswerStatus] = useState(''); // 'correct' və ya 'wrong'

    const wordBank = [
        { word: 'hello', meaning: 'A greeting or to begin a conversation' },
        { word: 'beautiful', meaning: 'Pleasing the senses or mind aesthetically' },
        { word: 'knowledge', meaning: 'Facts, information, and skills acquired through experience' },
        { word: 'courage', meaning: 'The ability to do something that frightens one' },
        { word: 'perseverance', meaning: 'Persistence in doing something despite difficulty' },
        { word: 'eloquent', meaning: 'Fluent or persuasive in speaking or writing' },
        { word: 'benevolent', meaning: 'Well meaning and kindly' },
        { word: 'ephemeral', meaning: 'Lasting for a very short time' },
        { word: 'resilient', meaning: 'Able to withstand or recover quickly from difficult conditions' },
        { word: 'serendipity', meaning: 'The occurrence of events by chance in a happy way' }
    ];

    function startGame() {
        setGameState('playing');
        setScore(0);
        setLives(3);
        setTimeLeft(30);
        setSelectedAnswer(null);
        setAnswerStatus('');
        generateQuestion();
    }

    useEffect(function() {
        if (gameState !== 'playing') return;

        const timer = setInterval(function() {
            setTimeLeft(function(prev) {
                if (prev <= 1) {
                    clearInterval(timer);
                    endGame();
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return function() {
            clearInterval(timer);
        };
    }, [gameState]);

    function generateQuestion() {
        const randomIndex = Math.floor(Math.random() * wordBank.length);
        const word = wordBank[randomIndex];

        const wrongOptions = wordBank
            .filter(function(w) { return w.word !== word.word })
            .sort(function() { return Math.random() - 0.5 })
            .slice(0, 3)
            .map(function(w) { return w.meaning });

        const allOptions = [word.meaning, ...wrongOptions].sort(function() { return Math.random() - 0.5 });

        setCurrentWord(word);
        setOptions(allOptions);
        setSelectedAnswer(null);
        setAnswerStatus('');
    }

    function checkAnswer(selectedMeaning) {
        setSelectedAnswer(selectedMeaning);

        if (selectedMeaning === currentWord.meaning) {
            setScore(score + 10);
            setAnswerStatus('correct');
        } else {
            const newLives = lives - 1;
            setLives(newLives);
            setAnswerStatus('wrong');

            if (newLives <= 0) {
                setTimeout(endGame, 1000);
                return;
            }
        }

        setTimeout(generateQuestion, 1000);
    }

    function endGame() {
        setGameState('finished');
    }

    return (
        <div className="lang-seven-container">

            {gameState === 'idle' && (
                <div className="lang-seven-start">
                    <div className="lang-seven-start-card">
                        <h3 className="lang-seven-title">Vocabulary Challenge</h3>
                        <p className="lang-seven-description">
                            30 saniyə ərzində nə qədər çox sözün mənasını tapa bilərsiniz?
                        </p>
                        <button className="lang-seven-start-btn" onClick={startGame}>OYUNU BAŞLAT</button>
                    </div>
                </div>
            )}

            {gameState === 'playing' && (
                <div className="lang-seven-game">
                    <div className="lang-seven-stats">
                        <div>Xal: {score}</div>
                        <div>Həyat: {'❤️'.repeat(lives)}</div>
                        <div>Vaxt: {timeLeft}s</div>
                    </div>

                    <h3 className="lang-seven-current-word">{currentWord && currentWord.word}</h3>

                    <div className="lang-seven-options">
                        {options.map(function(option, index) {
                            let className = 'lang-seven-option';
                            if (selectedAnswer === option) {
                                if (answerStatus === 'correct') className += ' correct';
                                if (answerStatus === 'wrong') className += ' wrong';
                            }

                            return (
                                <button
                                    key={index}
                                    className={className}
                                    onClick={function() { checkAnswer(option); }}
                                    disabled={selectedAnswer !== null}
                                >
                                    {option}
                                </button>
                            );
                        })}
                    </div>
                </div>
            )}

            {gameState === 'finished' && (
                <div className="lang-seven-results">
                    <h3>Oyun Bitdi</h3>
                    <p>Xal: {score}</p>
                    <button className="lang-seven-restart-btn" onClick={startGame}>Yenidən oyna</button>
                </div>
            )}

        </div>
    );
}

export default LangSevenGame;
