import { useEffect } from 'react';
import { useTheme } from '@/providers/ThemeProvider';

export const FaviconUpdater = () => {
  const { theme } = useTheme();

  useEffect(() => {
    const favicon = document.querySelector('link[rel="icon"]') as HTMLLinkElement;
    if (favicon) {
      favicon.href = theme === 'dark' ? '/lovable-uploads/94145ce6-007e-4080-b1ef-94129251f35f.png' : '/lovable-uploads/f83e59aa-2799-49ad-9fd2-1b97fe006a7e.png';
    } else {
      // Create favicon if it doesn't exist
      const newFavicon = document.createElement('link');
      newFavicon.rel = 'icon';
      newFavicon.type = 'image/png';
      newFavicon.href = theme === 'dark' ? '/lovable-uploads/94145ce6-007e-4080-b1ef-94129251f35f.png' : '/lovable-uploads/f83e59aa-2799-49ad-9fd2-1b97fe006a7e.png';
      document.head.appendChild(newFavicon);
    }
  }, [theme]);

  return null;
};