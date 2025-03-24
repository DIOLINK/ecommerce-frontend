import { THEME } from '@/app/_config/theme';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useLocalState } from './useLocalStorage';

export default function useTheme() {
  const [value, setValue] = useLocalState(THEME.localKey, THEME.light);
  const [theme, setTheme] = useState(value);
  const toggleRef = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    document.documentElement.setAttribute(THEME.dataTheme, theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((oldTheme) => THEME.changeMode(oldTheme));
    document.documentElement.setAttribute(
      THEME.dataTheme,
      THEME.changeMode(theme)
    );
    setValue(THEME.changeMode(theme));
  }, [theme, setValue]);

  useEffect(() => {
    const handleInputChange = (event: Event) => {
      const target = event.target as HTMLInputElement;
      if (target.type === 'checkbox') {
        toggleTheme();
      }
    };

    const inputElement = toggleRef.current;
    inputElement?.addEventListener('click', handleInputChange);

    return () => {
      inputElement?.removeEventListener('click', handleInputChange);
    };
  }, [toggleTheme]);

  return toggleRef;
}
