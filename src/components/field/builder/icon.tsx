import type { ReactElement } from 'react';

import { twMerge } from 'tailwind-merge';

import { COMPONENT_STYLE } from '@/theme';

import type { IconProps } from './types';

const { input } = COMPONENT_STYLE;

export function Icon({
  icon: ElementIcon,
  size,
  className = ''
}: IconProps): ReactElement {
  const { iconSize } = input.size[size];

  return (
    <ElementIcon
      className={twMerge(
        'absolute top-1/4 left-2',
        input.apperance.iconColor,
        iconSize,
        className
      )}
    />
  );
}
