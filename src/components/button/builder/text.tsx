import type { ReactElement } from 'react';

import { twMerge } from 'tailwind-merge';

import { COMPONENT_STYLE } from '@/theme';

import type { TextProps } from './types';

export function Text({
  children,
  size,
  variant,
  className = ''
}: TextProps): ReactElement {
  const { text } = COMPONENT_STYLE.button.size[size];
  const { textColor } = COMPONENT_STYLE.button.variant[variant];
  return (
    <main className={twMerge(...Object.values(text), textColor, className)}>
      {children}
    </main>
  );
}
