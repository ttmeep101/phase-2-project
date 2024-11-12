import React, { useState, useEffect } from "react";

function Header() {
  // Initialize with the value from localStorage or default to false
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('isDarkMode') === 'true';
  });

  useEffect(() => {
    // Apply the appropriate class to the body for styling
    document.body.className = isDarkMode ? 'dark-mode' : 'light-mode';

    // Save the current theme preference in localStorage
    localStorage.setItem('isDarkMode', isDarkMode);
  }, [isDarkMode]);

  function toggleDarkMode() {
    // Switch the dark mode state
    setIsDarkMode(prevMode => !prevMode);
  }

  return (
    <div className="header">
      <h1>
        Flatiron Software Engineering Job Search Guide
      </h1>
      <button onClick={toggleDarkMode}>
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </div>
  );
}

export default Header;