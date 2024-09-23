import type { ReactElement } from 'react';

import { twMerge } from 'tailwind-merge';

import { COMPONENT_STYLE } from '@/theme';

const { toggle } = COMPONENT_STYLE;

import type { DotProps } from './types';

export function Dot({
  children,
  className = '',
  size
}: DotProps): ReactElement {
  const { backgroundColor, borderColor, hover, active, disabled, focus } =
    toggle.dotAppearance;
  const { dot } = toggle.size[size];
  const { border, borderRadius } = toggle.dotShape;
  return (
    <div
      className={twMerge(
        'dot absolute left-0.5 peer-checked:left-[0.375rem] top-0.5 transition-transform duration-300 peer-checked:translate-x-full',
        Object.values(dot),
        backgroundColor,
        borderColor,
        hover,
        active,
        disabled,
        focus,
        border,
        borderRadius,
        className
      )}
    >
      {children}
    </div>
  );
}
