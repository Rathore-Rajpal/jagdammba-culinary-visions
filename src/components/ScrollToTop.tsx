import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // When the pathname changes, scroll to the top of the page
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};
