import type { ReactElement } from 'react';

import { twMerge } from 'tailwind-merge';

import { COMPONENT_STYLE } from '@/theme';

import type { ShapeProps } from './types';

const { button } = COMPONENT_STYLE;

export function Shape({
  variant,
  size,
  className = '',
  ...props
}: ShapeProps): ReactElement {
  const {
    gap,
    height,
    maxHeight,
    maxWidth,
    minHeight,
    minWidth,
    width,
    padding
  } = button.size[size];

  return (
    <button
      {...props}
      className={twMerge(
        'relative flex items-center justify-center transition-colors group',
        Object.values(button.shape),
        Object.values(padding),
        Object.values(button.variant[variant]),
        gap,
        height,
        maxHeight,
        maxWidth,
        minHeight,
        minWidth,
        width,
        className
      )}
    />
  );
}
