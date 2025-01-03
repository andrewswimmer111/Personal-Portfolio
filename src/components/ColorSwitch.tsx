import React, { useState, useEffect } from 'react';
import '../index.css'

const themes = [
  'theme-simple-light',
  'theme-simple-dark',
  'theme-teal',
  'theme-blue',
  'theme-dark-blue',
  'theme-purple',
  'theme-maroon',
  'theme-brown',
  'theme-cotton-candy',
  'theme-grey-modern',
  'theme-dark-modern',
];

const ColorSwitch = () => {
  const [currentTheme, setCurrentTheme] = useState(localStorage.getItem('theme') || 'theme-simple-light');

  // Apply theme to the root element
  useEffect(() => {
    const root = document.documentElement;
    themes.forEach((theme) => root.classList.remove(theme));
    root.classList.add(currentTheme);
    localStorage.setItem('theme', currentTheme); // Persist theme
  }, [currentTheme]);

  return (
    <div className="color-switch">
      <label htmlFor="theme-select">Choose Theme:</label>
      <select
        id="theme-select"
        value={currentTheme}
        onChange={(e) => setCurrentTheme(e.target.value)}
        className="color-switch-select"
      >
        {themes.map((theme) => (
          <option key={theme} value={theme}>
            {theme.replace('theme-', '').replace('-', ' ').toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ColorSwitch;
