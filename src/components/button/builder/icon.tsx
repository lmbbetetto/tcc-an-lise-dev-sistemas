import type { ReactElement } from 'react';

import { twMerge } from 'tailwind-merge';

import { COMPONENT_STYLE } from '@/theme';

import type { IconProps } from './types';

export function Icon({
  icon: ElementIcon,
  size,
  variant,
  className = ''
}: IconProps): ReactElement {
  const { iconSize } = COMPONENT_STYLE.button.size[size];
  const { iconColor } = COMPONENT_STYLE.button.variant[variant];

  return <ElementIcon className={twMerge(iconSize, iconColor, className)} />;
}
