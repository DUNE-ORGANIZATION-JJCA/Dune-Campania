'use client';

import { useEffect, useState } from 'react';
import { useAnalytics, useScrollTracking } from './Analytics';

export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  useAnalytics();
  useScrollTracking();
  return <>{children}</>;
}
