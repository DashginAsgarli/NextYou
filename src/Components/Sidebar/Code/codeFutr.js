import React, { useState, useEffect } from 'react';
import './codeFutr.css';

function CodeFutr ()  {
  const [field, setField] = useState('frontend');
  const [hours, setHours] = useState(20);
  const [english, setEnglish] = useState('B1');
  const [prediction, setPrediction] = useState({ min: 0, max: 0 });

  useEffect(() => {
    let baseSalary = 600;
    if (field === 'backend') baseSalary += 200;
    if (field === 'fullstack') baseSalary += 500;

    const langMultiplier = { 'A1-A2': 1, 'B1-B2': 1.5, 'C1-C2': 2.5 };
    const multiplier = langMultiplier[english] || 1;

    const experienceFactor = hours > 30 ? 1.3 : 1;

    let finalMin = baseSalary * multiplier * experienceFactor;
    let finalMax = finalMin * 1.8; 

    setPrediction({
      min: Math.round(finalMin / 10) * 10,
      max: Math.round(finalMax / 10) * 10
    });
  }, [field, hours, english]);

  return (
    <div className="salary-card-container">
      <div className="predictor-header">
        <h2>Gələcək Qazancını Hesabla</h2>
        <p>Sahəni seç və süni intellekt sənin üçün potensial maaşı hesablasın</p>
      </div>

      <div className="predictor-content">
        <div className="controls">
          <div className="control-group">
            <label>İxtisas</label>
            <div className="custom-select-chips">
              {['Frontend', 'Backend', 'Fullstack'].map(f => (
                <div 
                  key={f} 
                  className={`chip ${field === f.toLowerCase() ? 'active' : ''}`}
                  onClick={() => setField(f.toLowerCase())}
                >
                  {f}
                </div>
              ))}
            </div>
          </div>

          <div className="control-group">
            <label>İngilis dili səviyyən</label>
            <select value={english} onChange={(e) => setEnglish(e.target.value)}>
              <option value="A1-A2">A1 - A2 (Başlanğıc)</option>
              <option value="B1-B2">B1 - B2 (Orta)</option>
              <option value="C1-C2">C1 - C2 (Yaxşı/Xarici şirkətlər)</option>
            </select>
          </div>

          <div className="control-group">
            <label>Həftəlik ayrılan vaxt: <span>{hours} saat</span></label>
            <input 
              type="range" min="10" max="60" 
              value={hours} 
              onChange={(e) => setHours(e.target.value)} 
            />
          </div>
        </div>

        <div className="display-result">
          <div className="salary-box">
            <span className="label">Təxmini Aylıq Gəlir:</span>
            <h3 className="amount-range">
              {prediction.min}₼ - {prediction.max}₼
            </h3>
            <div className="market-note">
              {english === 'C1-C2' ? 
                "🌍 Xarici bazar (Remote) imkanları daxil olmaqla" : 
                "📍 Yerli bazar statistikalarına əsasən"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeFutr;