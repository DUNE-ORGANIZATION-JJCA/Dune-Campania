'use client';

import { ReactNode, useEffect, useState } from 'react';
import { useAnalytics, useScrollTracking } from './Analytics';

export function AnalyticsProvider({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      useAnalytics();
      useScrollTracking();
    }
  }, [mounted]);

  return <>{children}</>;
}