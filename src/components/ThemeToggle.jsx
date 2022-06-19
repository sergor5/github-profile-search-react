import { useState } from 'react';
import { DarkModeSwitch } from './ThemeSwitcher';
import useDarkMode from '../hooks/useDarkMode';

function ThemeToggle() {
  const [colorTheme, setTheme] = useDarkMode(true);
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleDarkMode = (checked) => {
    setDarkMode(checked);
    setTheme(checked);
  };

  return <DarkModeSwitch style={{ marginBottom: '2rem' }} checked={isDarkMode} onChange={toggleDarkMode} size={120} />;
}

export default ThemeToggle;
