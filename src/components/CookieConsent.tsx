"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CookieIcon } from '@/components/icons/CookieIcon';
import { SectionAnimator } from './SectionAnimator';

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // This check ensures localStorage is accessed only on the client side
    if (typeof window === 'undefined') return;
    
    const consent = localStorage.getItem('cookie_consent');
    if (consent === null) {
      // If no consent has been given, show the banner after a short delay
      setTimeout(() => setIsVisible(true), 1500);
    }
  }, []);

  const handleConsent = (consent: boolean) => {
    localStorage.setItem('cookie_consent', consent.toString());
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-[999]">
       <SectionAnimator>
        <Card className="w-full max-w-sm">
          <CardHeader className="items-center text-center">
            <CookieIcon className="w-12 h-12 mb-2 text-primary" />
            <CardTitle className="font-headline">We use cookies</CardTitle>
            <CardDescription>
              This website uses cookies to ensure you get the best experience on our site.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col sm:flex-row gap-2">
            <Button className="w-full" onClick={() => handleConsent(true)}>
              Allow
            </Button>
            <Button className="w-full" variant="outline" onClick={() => handleConsent(false)}>
              Decline
            </Button>
          </CardContent>
        </Card>
      </SectionAnimator>
    </div>
  );
}
