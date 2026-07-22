import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }

    const scrollToHashTarget = () => {
      const element = document.getElementById(hash.replace('#', ''));

      if (!element) {
        window.scrollTo(0, 0);
        return;
      }

      const headerOffset = 110;
      const elementTop = element.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top: Math.max(0, elementTop - headerOffset),
        behavior: 'smooth',
      });
    };

    const timer = window.setTimeout(scrollToHashTarget, 80);
    return () => window.clearTimeout(timer);
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
