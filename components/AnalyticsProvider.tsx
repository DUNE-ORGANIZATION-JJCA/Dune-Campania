'use client';

import { useAnalytics, useScrollTracking } from './Analytics';

export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  useAnalytics();
  useScrollTracking();
  return <>{children}</>;
}
