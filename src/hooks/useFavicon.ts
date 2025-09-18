import { useEffect } from 'react';
import { useTheme } from '@/providers/ThemeProvider';

export const useFavicon = () => {
  const { theme } = useTheme();

  useEffect(() => {
    const favicon = document.querySelector('link[rel="icon"]') as HTMLLinkElement;
    if (favicon) {
      favicon.href = theme === 'dark' ? '/favicon-light.png' : '/favicon-dark.png';
    } else {
      // Create favicon if it doesn't exist
      const newFavicon = document.createElement('link');
      newFavicon.rel = 'icon';
      newFavicon.type = 'image/png';
      newFavicon.href = theme === 'dark' ? '/favicon-light.png' : '/favicon-dark.png';
      document.head.appendChild(newFavicon);
    }
  }, [theme]);
};