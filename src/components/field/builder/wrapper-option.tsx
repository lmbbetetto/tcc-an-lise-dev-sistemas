import type { ReactElement } from 'react';

import { twMerge } from 'tailwind-merge';

import { COMPONENT_STYLE } from '@/theme';

import type { WrapperOptionProps } from './types';

const { wrapperOption } = COMPONENT_STYLE;

export function WrapperOption({
  size,
  className = '',
  ...props
}: WrapperOptionProps): ReactElement {
  const { padding, ...sizeTheme } = wrapperOption.size[size];

  return (
    <main
      className={twMerge(
        'flex flex-col overflow-hidden overflow-y-auto',
        Object.values(padding),
        Object.values(sizeTheme),
        Object.values(wrapperOption.shape),
        Object.values(wrapperOption.apperance),
        className
      )}
      {...props}
    />
  );
}
