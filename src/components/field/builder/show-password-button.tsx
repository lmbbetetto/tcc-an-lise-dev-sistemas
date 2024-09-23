'use client';
import { useMemo, type ReactElement } from 'react';

import { IconEye, IconEyeOff } from '@tabler/icons-react';
import { twMerge } from 'tailwind-merge';

import { COMPONENT_STYLE } from '@/theme';

import type { ShowPasswordButtonProps } from './types';

const { input } = COMPONENT_STYLE;

export function ShowPasswordButton({
  size,
  visible,
  onClick,
  className = ''
}: ShowPasswordButtonProps): ReactElement {
  const { iconSize } = useMemo(() => input.size[size], [size]);
  return (
    <button type="button" tabIndex={-1} onClick={onClick}>
      {visible ? (
        <IconEyeOff
          size={20}
          className={twMerge(
            'transition-colors hover:opacity-60 absolute top-1/4 right-4',
            input.apperance.iconColor,
            iconSize,
            className
          )}
        />
      ) : (
        <IconEye
          size={20}
          className={twMerge(
            'transition-colors hover:opacity-60 absolute top-1/4 right-4',
            input.apperance.iconColor,
            iconSize,
            className
          )}
        />
      )}
    </button>
  );
}
