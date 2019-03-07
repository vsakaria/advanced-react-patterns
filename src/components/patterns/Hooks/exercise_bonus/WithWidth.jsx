import React, { useState, useEffect } from "react";

export const SMALL = 1;
export const MEDIUM = 2;
export const LARGE = 3;

const largeWidth = 992,
  mediumWidth = 768;

const useWidth = () => {
  const windowWidth = () => {
    let innerWidth = 0;
    let width;
    if (window) innerWidth = window.innerWidth;

    if (innerWidth >= largeWidth) {
      width = LARGE;
    } else if (innerWidth >= mediumWidth) {
      width = MEDIUM;
    } else {
      // innerWidth < 768
      width = SMALL;
    }

    return width;
  };

  const [width, setWidth] = useState(windowWidth());

  useEffect(() => {
    if (window) {
      window.addEventListener("resize", handleResize);
      handleResize();
    }
    return () => {
      if (window) window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleResize = () => {
    let currentWidth = windowWidth();
    if (currentWidth !== width) setWidth(currentWidth);
  };

  return width;
};

export default useWidth;
