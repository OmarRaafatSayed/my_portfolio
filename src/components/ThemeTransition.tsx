"use client";

import { useThemeTransition } from '@/context/ThemeTransitionContext';
import { AnimatePresence, motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';

export function ThemeTransition() {
  const { isTransitioning, resolvedTheme } = useThemeTransition();

  const FrontIcon = resolvedTheme === 'light' ? Sun : Moon;
  const BackIcon = resolvedTheme === 'light' ? Moon : Sun;

  return (
    <AnimatePresence>
      {isTransitioning && (
        // The backdrop
        <motion.div
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/60 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.4 } }}
          exit={{ opacity: 0, transition: { delay: 1.2, duration: 0.4 } }}
        >
          {/* The perspective container for the 3D effect */}
          <motion.div
            className="w-48 h-48"
            style={{ perspective: '1200px' }}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1, transition: { duration: 0.4, delay: 0.2, ease: "easeOut" } }}
          >
            {/* The flipping element */}
            <motion.div
              className="relative w-full h-full"
              style={{ transformStyle: 'preserve-3d' }}
              animate={{ rotateY: 180 }}
              transition={{ duration: 1, ease: 'easeInOut', delay: 0.4 }}
            >
              {/* Front Face */}
              <div className="absolute w-full h-full flex items-center justify-center bg-secondary rounded-3xl shadow-2xl border-2 border-primary/50" style={{ backfaceVisibility: 'hidden' }}>
                <FrontIcon className="h-24 w-24 text-primary" />
              </div>

              {/* Back Face */}
              <div className="absolute w-full h-full flex items-center justify-center bg-secondary rounded-3xl shadow-2xl border-2 border-primary/50" style={{ transform: 'rotateY(180deg)', backfaceVisibility: 'hidden' }}>
                <BackIcon className="h-24 w-24 text-primary" />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
