'use client';
import type { ReactElement } from 'react';

import { IconLoader2 } from '@tabler/icons-react';
import { twMerge } from 'tailwind-merge';

import { COMPONENT_STYLE } from '@/theme';

import * as Builder from './builder';
import type { Props } from './types';

const { button } = COMPONENT_STYLE;

export function Button({
  text,
  onClick,
  type,
  icon: Icon,
  size = 'medium',
  variant = 'primary',
  disabled = false,
  loading = false,
  ...props
}: Props): ReactElement {
  return (
    <Builder.Shape
      {...props}
      data-loading={loading}
      size={size}
      variant={variant}
      onClick={onClick}
      type={type}
      disabled={disabled || loading}
    >
      {Icon ? <Builder.Icon icon={Icon} size={size} variant={variant} /> : null}
      <Builder.Text size={size} variant={variant}>
        {text}
      </Builder.Text>
      {loading ? (
        <div
          className={twMerge(
            'absolute top-1/4 right-0',
            button.size[size].padding.right
          )}
        >
          <Builder.Icon
            icon={IconLoader2}
            variant={variant}
            size={size}
            className="animate-spin"
          />
        </div>
      ) : null}
    </Builder.Shape>
  );
}
