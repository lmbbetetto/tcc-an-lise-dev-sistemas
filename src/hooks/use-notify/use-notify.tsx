'use client';

import { useMemo } from 'react';
import { toast } from 'react-toastify';

import { useTheme } from 'next-themes';

import type { NotifyInterface, notifyProps } from './types';

export function useNotify(): NotifyInterface {
  const { systemTheme, theme } = useTheme();

  const currentTheme = useMemo(
    () => (theme === 'system' ? systemTheme : theme),
    [systemTheme, theme]
  );

  return {
    notify: ({ text, type }: notifyProps): void => {
      if (type === 'success') {
        toast.success(text, { theme: currentTheme });
      } else if (type === 'error') {
        toast.error(text, { theme: currentTheme });
      } else if (type === 'warning') {
        toast.warning(text, { theme: currentTheme });
      }
    }
  };
}
