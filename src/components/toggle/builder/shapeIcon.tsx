import type { ReactElement } from 'react';

import { twMerge } from 'tailwind-merge';

import { COMPONENT_STYLE } from '@/theme';

import type { IconShapeProps } from './types';

const { toggle } = COMPONENT_STYLE;

export function ShapeIcon({
  icon: ElementIcon,
  checked,
  className,
  size
}: IconShapeProps): ReactElement {
  const { icon } = toggle.size[size];
  const { iconColor } = toggle.appearance;

  return (
    <ElementIcon
      className={twMerge(
        'absolute top-1',
        checked ? 'left-1' : 'right-1',
        Object.values(icon),
        iconColor,
        className
      )}
    />
  );
}
