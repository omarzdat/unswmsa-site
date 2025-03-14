import { useState, useEffect, useCallback } from 'react';

const useFooterVisibility = (currentPath, containerRef = null) => {
  const [isVisible, setIsVisible] = useState(false);

  const checkScroll = useCallback(() => {
    // First try to use the ref if provided
    const container = containerRef?.current || document.querySelector('.md\\:snap-y');
    if (!container) return;

    const scrollPosition = container.scrollTop;
    const viewportHeight = container.clientHeight;
    const totalHeight = container.scrollHeight;
    
    const isNearBottom = totalHeight - (scrollPosition + viewportHeight) <= 100;
    setIsVisible(isNearBottom);
  }, [containerRef]);

  useEffect(() => {
    setIsVisible(false);
    
    // First try to use the ref if provided
    const container = containerRef?.current || document.querySelector('.md\\:snap-y');
    if (!container) return;

    container.addEventListener('scroll', checkScroll);
    
    // Small delay to ensure proper calculation after route change
    setTimeout(checkScroll, 100);

    return () => {
      container.removeEventListener('scroll', checkScroll);
    };
  }, [checkScroll, currentPath, containerRef]); // Re-run when path or ref changes

  return isVisible;
};

export default useFooterVisibility;