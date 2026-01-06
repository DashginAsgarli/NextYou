import { useState, useEffect } from 'react';
import "./theme.css";

function Theme() {
  const [isMode, setIsMode] = useState(true);

  useEffect(() => isMode ? document.body.classList.remove('light-theme') :document.body.classList.add('light-theme'), [isMode]);

  function theme() { setIsMode(!isMode); }
  return (
    <div onClick={theme} className="theme-toggle">
      <i className={`bi ${isMode ? 'bi-brightness-high-fill' : 'bi-moon-stars'}`}></i>
      <p>Tema</p>
    </div>
  );
}
export default Theme;