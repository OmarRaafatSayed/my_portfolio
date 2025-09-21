"use client";

import { useTheme } from 'next-themes';
import React, { createContext, useContext, useState, ReactNode, useCallback } from 'react';

interface ThemeTransitionContextType {
  isTransitioning: boolean;
  toggleTheme: () => void;
  resolvedTheme: string | undefined;
}

const ThemeTransitionContext = createContext<ThemeTransitionContextType | undefined>(undefined);

export const ThemeTransitionProvider = ({ children }: { children: ReactNode }) => {
  const { setTheme, resolvedTheme } = useTheme();
  const [isTransitioning, setIsTransitioning] = useState(false);

  const toggleTheme = useCallback(() => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    const newTheme = resolvedTheme === 'light' ? 'dark' : 'light';

    // Change theme halfway through the animation
    const changeThemeTimer = setTimeout(() => {
      setTheme(newTheme);
    }, 900); 

    // End the transition after it completes
    const endTransitionTimer = setTimeout(() => {
      setIsTransitioning(false);
    }, 1800);

    return () => {
      clearTimeout(changeThemeTimer);
      clearTimeout(endTransitionTimer);
    };
  }, [resolvedTheme, setTheme, isTransitioning]);

  return (
    <ThemeTransitionContext.Provider value={{ isTransitioning, toggleTheme, resolvedTheme }}>
      {children}
    </ThemeTransitionContext.Provider>
  );
};

export const useThemeTransition = () => {
  const context = useContext(ThemeTransitionContext);
  if (context === undefined) {
    throw new Error('useThemeTransition must be used within a ThemeTransitionProvider');
  }
  return context;
};
