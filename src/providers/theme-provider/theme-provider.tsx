'use client';
import { ReactElement, useEffect, useState } from 'react';

import { ThemeProvider as NextThemeProvider } from 'next-themes';

import type { Props } from './types';

export function ThemeProviderr({ children }: Props): ReactElement {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <></>;
  }

  return <NextThemeProvider attribute="class">{children}</NextThemeProvider>;
}
