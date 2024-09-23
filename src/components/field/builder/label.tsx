import type { ReactElement } from 'react';

import { twMerge } from 'tailwind-merge';

import { COMPONENT_STYLE } from '@/theme';

import type { LabelProps } from './types';

const { label } = COMPONENT_STYLE;

export function Label({
  text,
  children,
  className = '',
  isRequired = false,
  ...props
}: LabelProps): ReactElement {
  const { gap, required, ...labelTheme } = label;

  return (
    <label
      {...props}
      className={twMerge('flex flex-col w-full', gap, className)}
    >
      <span
        className={twMerge(
          'flex w-full gap-1',
          Object.values(labelTheme),
          className
        )}
      >
        {text}
        {isRequired ? (
          <span className={twMerge(Object.values(required))}>*</span>
        ) : null}
      </span>
      <main className="relative block">{children}</main>
    </label>
  );
}
