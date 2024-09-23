'use client';
import { forwardRef, type ReactElement } from 'react';

import { twMerge } from 'tailwind-merge';

import { COMPONENT_STYLE } from '@/theme';

import { ShapeIcon } from './shapeIcon';
import type { ShapeProps } from './types';

const { toggle } = COMPONENT_STYLE;

export const Shape = forwardRef<HTMLInputElement, ShapeProps>(function Shape(
  {
    className = '',
    children,
    size,
    checked,
    backgroundIcon,
    disabled,
    backgroundIconClassName,
    onChange
  },
  ref
): ReactElement {
  const { width, height } = toggle.size[size];
  const { backgroundColor, borderColor, hover, active, focus } =
    toggle.appearance;

  return (
    <label className="flex cursor-pointer select-none items-center">
      <div className="relative">
        <input
          ref={ref}
          type="checkbox"
          className="sr-only peer"
          onChange={onChange}
          checked={checked}
          disabled={disabled}
        />
        <div
          className={twMerge(
            'transition-colors',
            Object.values(toggle.shape),
            width,
            height,
            borderColor,
            backgroundColor,
            hover,
            active,
            toggle.appearance.disabled,
            focus,
            className
          )}
        >
          {backgroundIcon ? (
            <ShapeIcon
              checked={checked}
              icon={backgroundIcon}
              className={twMerge('mt-0.5', backgroundIconClassName)}
              size={size}
            />
          ) : null}
        </div>
        {children}
      </div>
    </label>
  );
});
