import { useEffect, useState } from "react";

export default function useIsTablet(minWidth = 577, maxWidth = 991) {
  const [isTablet, setIsTablet] = useState(
    window.innerWidth >= minWidth && window.innerWidth <= maxWidth
  );

  useEffect(() => {
    const handleResize = () => {
      setIsTablet(
        window.innerWidth >= minWidth && window.innerWidth <= maxWidth
      );
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [minWidth, maxWidth]);

  return isTablet;
}
