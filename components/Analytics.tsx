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
  try {
    await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type, data }),
      keepalive: true
    });
  } catch (e) {
    // Silent fail - no analytics errors in console
  }
}

export function useAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const startTime = useRef(Date.now());
  const maxScroll = useRef(0);
  const hasTrackedSession = useRef(false);

  // Track session start
  useEffect(() => {
    if (!hasTrackedSession.current) {
      hasTrackedSession.current = true;
      
      sendAnalytics('session_start', {
        entryPage: pathname,
        referrer: typeof window !== 'undefined' ? document.referrer : '',
        screenWidth: typeof window !== 'undefined' ? window.screen.width : 0,
        screenHeight: typeof window !== 'undefined' ? window.screen.height : 0
      });
    }
  }, [pathname]);

  // Track page views on route change
  useEffect(() => {
    const timeOnPage = Math.floor((Date.now() - startTime.current) / 1000);
    
    sendAnalytics('page_view', {
      pagePath: pathname,
      pageTitle: document.title,
      timeOnPage,
      scrollDepth: maxScroll.current,
      exitPage: false
    });

    // Reset for new page
    startTime.current = Date.now();
    maxScroll.current = 0;
  }, [pathname, searchParams, pathname]);

  const trackClick = useCallback((elementId: string, elementType: string, elementText?: string) => {
    sendAnalytics('click', {
      elementId,
      elementType,
      elementText: elementText || '',
      pagePath: pathname
    });
  }, [pathname]);

  const trackCustomEvent = useCallback((eventType: string, category?: string, label?: string, value?: string) => {
    sendAnalytics('custom_event', {
      eventType,
      category,
      label,
      value,
      pagePath: pathname
    });
  }, [pathname]);

  const trackExit = useCallback(() => {
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
  const maxScroll = useRef(0);

  useEffect(() => {
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

// Automatic click tracking for interactive elements
// Usage: const TrackedButton = withClickTracking(Button, 'cta-button', 'button');
export function withClickTracking(
  Component: React.ComponentType<{ onClick?: (e: React.MouseEvent) => void }>,
  elementId: string,
  elementType: string
) {
  return function WrappedComponent(props: { onClick?: (e: React.MouseEvent) => void }) {
    const { trackClick } = useAnalytics();

    const handleClick = (e: React.MouseEvent) => {
      const target = e.target as HTMLElement;
      const text = target.textContent || target.innerText || '';
      trackClick(elementId, elementType, text);
      props.onClick?.(e);
    };

    return <Component {...props} onClick={handleClick} />;
  };
}