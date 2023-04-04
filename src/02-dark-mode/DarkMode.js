import { useState } from 'react';

export default function DarkMode() {
  const [mode, setMode] = useState('lightMode');

  switch (mode) {
    case 'lightMode':
      document.querySelector('.page').classList.remove('dark-mode');
      break;
    case 'darkMode':
      document.querySelector('.page').classList.add('dark-mode');
      break;
    default:
      console.log('Something went wrong');
  }

  return (
    <div className="page">
      <button onClick={() => setMode('darkMode')} className="dark-mode-button">
        Dark Mode
      </button>
      <button
        onClick={() => setMode('lightMode')}
        className="light-mode-button"
      >
        Light Mode
      </button>
    </div>
  );
}
