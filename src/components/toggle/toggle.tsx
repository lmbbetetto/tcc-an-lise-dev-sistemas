'use client';
import { forwardRef, type ReactElement } from 'react';

import * as Builder from './builder';
import type { Props } from './types';

export const Toggle = forwardRef<HTMLInputElement, Props>(function Toggle(
  { size = 'medium', checked, onChange, backgroundIcon, dotIcon, disabled },
  ref
): ReactElement {
  return (
    <Builder.Shape
      ref={ref}
      checked={checked}
      onChange={onChange}
      size={size}
      backgroundIcon={backgroundIcon}
      disabled={disabled}
    >
      <Builder.Dot size={size}>
        {dotIcon && <Builder.Icon icon={dotIcon} />}
      </Builder.Dot>
    </Builder.Shape>
  );
});
