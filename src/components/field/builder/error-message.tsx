import type { ReactElement } from 'react';

import { twMerge } from 'tailwind-merge';

import { COMPONENT_STYLE } from '@/theme';

import type { ErrorMessageProps } from './types';

const { fieldErrorMessage } = COMPONENT_STYLE;

export function ErrorMessage({ children }: ErrorMessageProps): ReactElement {
  const { margin, ...styles } = fieldErrorMessage;
  return (
    <span className={twMerge(Object.values(margin), Object.values(styles))}>
      {children}
    </span>
  );
}
