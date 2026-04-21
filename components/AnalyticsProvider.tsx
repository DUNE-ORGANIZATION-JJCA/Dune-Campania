'use client';

import { ReactNode } from 'react';

// Analytics deshabilitado temporalmente
export function AnalyticsProvider({ children }: { children: ReactNode }) {
  return <>{children}</>;
}