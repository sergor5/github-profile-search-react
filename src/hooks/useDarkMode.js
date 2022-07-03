import { useEffect, useState } from 'react';

export default function useDarkMode() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });
  const colorTheme = theme ? 'dark' : 'light';
  useEffect(() => {
    const root = window.document.documentElement;

    root.classList = '';
    root.classList.add(colorTheme);
    localStorage.setItem('theme', colorTheme);
  }, [theme]);

  return [colorTheme, setTheme];
}
