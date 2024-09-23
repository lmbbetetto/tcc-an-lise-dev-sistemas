'use client';
import type { ReactElement } from 'react';

import { IconLoader2 } from '@tabler/icons-react';
import { twMerge } from 'tailwind-merge';

import { COMPONENT_STYLE } from '@/theme';

import type { OptionProps } from './types';

const { option } = COMPONENT_STYLE;

export function Loading({
  size,
  className = '',
  ...props
}: OptionProps): ReactElement {
  const { apperance, shape } = option;
  const { padding, text, iconSize, ...sizeTheme } = option.size[size];

  return (
    <main
      {...props}
      className={twMerge(
        'flex items-center',
        Object.values(shape),
        Object.values(padding),
        Object.values(text),
        apperance.active,
        apperance.borderColor,
        apperance.backgroundColor,
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
    >
      <IconLoader2
        className={twMerge('animate-spin', apperance.iconColor, iconSize)}
      />
      Carregando
    </main>
  );
}
