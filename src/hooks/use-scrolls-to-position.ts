import { useEffect, useState } from "react";

const useScrollToPosition: (thresholdPixcell: number) => boolean = (
  thresholdPixcell = 100
) => {
  const [scrolledToThreshold, setScrolledToThreshold] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolledToThreshold(window.scrollY > thresholdPixcell);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [thresholdPixcell]);

  return scrolledToThreshold;
};

export default useScrollToPosition;
