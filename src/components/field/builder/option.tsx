import type { ReactElement } from 'react';

import { twMerge } from 'tailwind-merge';

import { COMPONENT_STYLE } from '@/theme';

import type { OptionProps } from './types';

const { option } = COMPONENT_STYLE;

export function Option({
  size,
  className = '',
  ...props
}: OptionProps): ReactElement {
  const { apperance, shape } = option;
  const { padding, text, ...sizeTheme } = option.size[size];

  return (
    <option
      role="option"
      {...props}
      className={twMerge(
        'flex',
        Object.values(shape),
        Object.values(padding),
        Object.values(text),
        apperance.active,
        apperance.borderColor,
        apperance.backgroundColor,
        apperance.disabled,
        apperance.focus,
        apperance.hover,
        apperance.textColor,
        sizeTheme.gap,
        sizeTheme.height,
        sizeTheme.maxHeight,
        sizeTheme.minHeight,
        sizeTheme.maxWidth,
        sizeTheme.minWidth,
        sizeTheme.width,
        className
      )}
    />
  );
}
