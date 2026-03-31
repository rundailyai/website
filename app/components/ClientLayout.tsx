'use client';

import { ThemeProvider } from 'next-themes';
import { SmoothScroll } from './SmoothScroll';

export function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <SmoothScroll />
      {children}
    </ThemeProvider>
  );
}
