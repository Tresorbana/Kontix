"use client";

import { useEffect } from 'react';

export const CursorManager = () => {
  useEffect(() => {
    const checkIsMobile = () => {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 768;
    };

    if (!checkIsMobile()) {
      // Default cursor, no custom behavior on desktop
    }

    const handleResize = () => {
      // No cursor class toggling; keep default cursor on all devices
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return null;
};