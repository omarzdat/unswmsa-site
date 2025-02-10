import { useState, useEffect } from 'react';

const useFooterVisibility = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Find the last snap-scroll section
    const sections = document.querySelectorAll('.snap-start');
    if (!sections.length) return;
    
    const lastSection = sections[sections.length - 1];
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.5 // Show footer when last section is at least 50% visible
      }
    );
    
    observer.observe(lastSection);
    
    return () => {
      observer.disconnect();
    };
  }, []);

  return isVisible;
};

export default useFooterVisibility;