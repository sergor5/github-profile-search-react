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

  return <DarkModeSwitch checked={isDarkMode} onChange={toggleDarkMode} size={40} />;
}

export default ThemeToggle;
