// Import For React
import { useState, useEffect } from 'react';

// Component Media Query
function useMediaQuery(query: string) {
  // State Media Query
  const [matches, setMatches] = useState(false);

  // Effect Media Query
  useEffect(() => {
    // Media Query
    const mediaQueryList = window.matchMedia(query);

    // Handle Match Change
    const handleMatchChange = (e: MediaQueryListEvent) => {
      setMatches(e.matches);
    };

    // Set Matches
    setMatches(mediaQueryList.matches);
    mediaQueryList.addListener(handleMatchChange);

    return () => {
      mediaQueryList.removeListener(handleMatchChange);
    };
  }, [query]);

  return matches;
}

export default useMediaQuery;