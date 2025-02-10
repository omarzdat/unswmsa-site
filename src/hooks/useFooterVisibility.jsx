import { useState, useEffect, useCallback } from 'react';

const useFooterVisibility = (currentPath) => {
  const [isVisible, setIsVisible] = useState(false);

  const checkScroll = useCallback(() => {
    const container = document.querySelector('.md\\:snap-y');
    if (!container) return;

    const scrollPosition = container.scrollTop;
    const viewportHeight = container.clientHeight;
    const totalHeight = container.scrollHeight;
    
    const isNearBottom = totalHeight - (scrollPosition + viewportHeight) <= 100;
    setIsVisible(isNearBottom);
  }, []);

  useEffect(() => {
    setIsVisible(false);
    
    const container = document.querySelector('.md\\:snap-y');
    if (!container) return;

    container.addEventListener('scroll', checkScroll);
    
    // Small delay to ensure proper calculation after route change
    setTimeout(checkScroll, 100);

    return () => {
      container.removeEventListener('scroll', checkScroll);
    };
  }, [checkScroll, currentPath]); // Re-run when path changes

  return isVisible;
};

export default useFooterVisibility;