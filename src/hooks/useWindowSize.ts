// Import For React
import { useState, useEffect } from 'react';

// Function UseWindowSize
function useWindowSize() {
  // State
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // UseEffect
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Event Resize
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Return
  return windowSize;
}

// Export Default UseWindowSize
export default useWindowSize;