'use client';
import { forwardRef, type ReactElement } from 'react';

import { twMerge } from 'tailwind-merge';

import * as Builder from './builder';
import type { TextAreaProps } from './types';

export const Textarea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  function Textarea(
    { label, errorMessage, required = false, wrapperClass = '', ...props },
    ref
  ): ReactElement {
    return (
      <main className={twMerge('flex flex-col w-full', wrapperClass)}>
        <Builder.Label
          text={<div className="flex gap-2">{label}</div>}
          isRequired={required}
        >
          <Builder.Textarea
            {...props}
            ref={ref}
            data-error={Boolean(errorMessage)}
          />
        </Builder.Label>
        <Builder.ErrorMessage>{errorMessage}</Builder.ErrorMessage>
      </main>
    );
  }
);
