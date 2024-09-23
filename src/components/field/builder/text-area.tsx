import { forwardRef, type ReactElement } from 'react';

import { twMerge } from 'tailwind-merge';

import { COMPONENT_STYLE } from '@/theme';

import type { TextAreaProps } from './types';

const { textArea } = COMPONENT_STYLE;

export const Textarea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className = '', ...props }: TextAreaProps, ref): ReactElement => {
    const { apperance, shape, size } = textArea;
    const { text, ...sizeTheme } = textArea.size;
    return (
      <textarea
        {...props}
        ref={ref}
        className={twMerge(
          'peer/textarea transition-colors',
          Object.values(shape),
          Object.values(text),
          Object.values(size.padding),
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
          apperance.error,
          apperance.focus,
          apperance.hover,
          apperance.placeholder,
          apperance.textColor,
          apperance.outline,
          className
        )}
      />
    );
  }
);

Textarea.displayName = 'Textarea';
