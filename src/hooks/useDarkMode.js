import { useEffect, useState } from 'react';

export default function useDarkMode() {
  const [theme, setTheme] = useState(false);
  const colorTheme = theme ? 'dark' : 'light';
  useEffect(() => {
    const root = window.document.documentElement;

    root.classList = '';
    root.classList.add(colorTheme);
  }, [theme]);

  return [colorTheme, setTheme];
}
