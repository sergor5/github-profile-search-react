import { MoonIcon } from '@heroicons/react/solid';
import { SunIcon } from '@heroicons/react/solid';
import { useState } from 'react';

function ThemeToggle() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  return (
    <div>
      <button className="w-10 h-10" onClick={toggleTheme}>
        {theme === 'light' ? <MoonIcon /> : <SunIcon />}
      </button>
    </div>
  );
}

export default ThemeToggle;
