import { forwardRef, type ReactElement } from 'react';

import { twMerge } from 'tailwind-merge';

import { COMPONENT_STYLE } from '@/theme';

import type { InputProps } from './types';

const { input } = COMPONENT_STYLE;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      isPasswordType,
      size,
      withIcon = false,
      className = '',
      ...props
    }: InputProps,
    ref
  ): ReactElement => {
    const { apperance, shape } = input;
    const { padding, withIconPadding, text, spacingShowPassord, ...sizeTheme } =
      input.size[size];
    return (
      <input
        {...props}
        ref={ref}
        className={twMerge(
          'peer/input transition-colors',
          Object.values(shape),
          Object.values(withIcon ? withIconPadding : padding),
          Object.values(text),
          sizeTheme.gap,
          sizeTheme.height,
          sizeTheme.maxHeight,
          sizeTheme.maxWidth,
          sizeTheme.minHeight,
          sizeTheme.minWidth,
          sizeTheme.width,
          apperance.active,
          apperance.backgroundColor,
          apperance.borderColor,
          apperance.disabled,
          apperance.readOnly,
          apperance.error,
          apperance.focus,
          apperance.hover,
          apperance.placeholder,
          apperance.textColor,
          apperance.outline,
          isPasswordType && spacingShowPassord,
          className
        )}
      />
    );
  }
);

Input.displayName = 'Input';
