'use client';

import { useEffect, useRef, useCallback } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

interface AnalyticsData {
  pagePath?: string;
  pageTitle?: string;
  timeOnPage?: number;
  scrollDepth?: number;
  exitPage?: boolean;
  elementId?: string;
  elementType?: string;
  elementText?: string;
  x?: number;
  y?: number;
  eventType?: string;
  category?: string;
  label?: string;
  value?: string;
  referrer?: string;
  entryPage?: string;
  screenWidth?: number;
  screenHeight?: number;
}

const API_URL = '/api/analytics';

async function sendAnalytics(type: string, data: AnalyticsData = {}) {
  if (typeof window === 'undefined') return;
  
  try {
    await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type, data }),
      keepalive: true
    });
  } catch (e) {
    // Silent fail
  }
}

export function useAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const startTime = useRef<number>(0);
  const maxScroll = useRef<number>(0);
  const hasTrackedSession = useRef<boolean>(false);

  // Track session start
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    startTime.current = Date.now();
    
    if (!hasTrackedSession.current) {
      hasTrackedSession.current = true;
      
      sendAnalytics('session_start', {
        entryPage: pathname,
        referrer: document.referrer || '',
        screenWidth: window.screen.width,
        screenHeight: window.screen.height
      });
    }
  }, [pathname]);

  // Track page views on route change
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const timeOnPage = Math.floor((Date.now() - startTime.current) / 1000);
    
    sendAnalytics('page_view', {
      pagePath: pathname,
      pageTitle: document.title,
      timeOnPage,
      scrollDepth: maxScroll.current,
      exitPage: false
    });

    startTime.current = Date.now();
    maxScroll.current = 0;
  }, [pathname, searchParams]);

  const trackClick = useCallback((elementId: string, elementType: string, elementText?: string) => {
    if (typeof window === 'undefined') return;
    sendAnalytics('click', {
      elementId,
      elementType,
      elementText: elementText || '',
      pagePath: pathname
    });
  }, [pathname]);

  const trackCustomEvent = useCallback((eventType: string, category?: string, label?: string, value?: string) => {
    if (typeof window === 'undefined') return;
    sendAnalytics('custom_event', {
      eventType,
      category,
      label,
      value,
      pagePath: pathname
    });
  }, [pathname]);

  const trackExit = useCallback(() => {
    if (typeof window === 'undefined') return;
    const timeOnPage = Math.floor((Date.now() - startTime.current) / 1000);
    sendAnalytics('page_view', {
      pagePath: pathname,
      pageTitle: document.title,
      timeOnPage,
      scrollDepth: maxScroll.current,
      exitPage: true
    });
  }, [pathname]);

  return {
    trackClick,
    trackCustomEvent,
    trackExit
  };
}

// Hook to track scroll depth
export function useScrollTracking() {
  const maxScroll = useRef<number>(0);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? Math.floor((scrollTop / docHeight) * 100) : 0;
      if (scrollPercent > maxScroll.current) {
        maxScroll.current = scrollPercent;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return maxScroll;
}