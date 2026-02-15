"use client";

import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';
import { BackToTopButton } from '@/components/BackToTopButton';
import { Loader } from '@/components/Loader';
import { ThemeTransitionProvider } from '@/context/ThemeTransitionContext';
import { ThemeTransition } from '@/components/ThemeTransition';
import { CookieConsent } from '@/components/CookieConsent';
import { MobileNav } from '@/components/MobileNav';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      // Ensure scrolling is enabled when loader is gone
      document.body.style.overflow = 'auto'; 
    }, 2000); // Show loader for 2 seconds

    // Disable scrolling when loader is active
    document.body.style.overflow = 'hidden';

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'auto'; // Re-enable scrolling on component unmount
    };
  }, []);

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Omar Dawood</title>
        <meta name="description" content="Omar's Portfolio" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ThemeTransitionProvider>
            <ThemeTransition />
            <AnimatePresence mode="wait">
              {loading ? (
               <motion.div
                key="loader"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Loader />
              </motion.div>
              ) : (
                <motion.div
                  key="content"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Header />
                  <main className="pb-20 md:pb-0">{children}</main>
                  <Footer />
                  <MobileNav />
                  <Toaster />
                  <BackToTopButton />
                  <CookieConsent />
                </motion.div>
              )}
            </AnimatePresence>
          </ThemeTransitionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
