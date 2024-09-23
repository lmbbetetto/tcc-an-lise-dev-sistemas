import React, { ReactElement } from 'react';

import { twMerge } from 'tailwind-merge';

import { COMPONENT_STYLE } from '@/theme';

import { Props } from './types';
const { typography } = COMPONENT_STYLE;

export function Typography({
  type,
  variant = 'none',
  className = '',
  text,
  rtl
}: Props): ReactElement {
  const display = rtl ? 'flex-row-reverse' : 'flex-row';
  return (
    <p
      className={twMerge(
        Object.values(typography.variant[variant]),
        Object.values(typography.type[type]),
        display,
        className
      )}
    >
      {text}
    </p>
  );
}
