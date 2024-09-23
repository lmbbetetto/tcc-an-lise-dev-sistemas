'use client';
import type { ReactElement } from 'react';
import { FieldValues, useController } from 'react-hook-form';

import { twMerge } from 'tailwind-merge';

import { ErrorMessage } from '@/components/field/builder';
import { COMPONENT_STYLE } from '@/theme';

import { Toggle } from '@/components/toggle';

import type { ToggleProps } from './types';
import { Typography } from '../typography';

const { label: labelStyle } = COMPONENT_STYLE;

export function ControlledToggle<Values extends FieldValues>({
  label,
  labelPosition,
  backgroundIcon,
  dotIcon,
  size,
  ...props
}: ToggleProps<Values>): ReactElement {
  const { field, fieldState } = useController(props);

  return (
    <main className="flex flex-col">
      <label
        data-position={labelPosition}
        className={twMerge(
          'flex data-[position=top]:flex-col data-[position=bottom]:flex-col-reverse data-[position=right]:flex-row-reverse',
          labelStyle.gap
        )}
      >
        {label ? <Typography type="label" text={label} /> : null}
        <Toggle
          ref={field.ref}
          checked={Boolean(field.value)}
          onChange={field.onChange}
          backgroundIcon={backgroundIcon}
          dotIcon={dotIcon}
          size={size}
          disabled={field.disabled}
        />
      </label>
      <ErrorMessage>{fieldState.error?.message}</ErrorMessage>
    </main>
  );
}
