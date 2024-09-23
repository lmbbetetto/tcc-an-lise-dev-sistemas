'use client';
import { type ReactElement } from 'react';
import { FieldValues, useController } from 'react-hook-form';

import { Select } from '@/components/field';

import type { SelectProps } from './types';

export function ControlledSelect<Values extends FieldValues>({
  name,
  rules,
  shouldUnregister,
  defaultValue,
  control,
  disabled,
  options,
  ...props
}: SelectProps<Values>): ReactElement {
  const { field, fieldState } = useController({
    name,
    rules,
    shouldUnregister,
    defaultValue,
    control,
    disabled
  });

  return (
    <Select
      {...props}
      value={field.value}
      options={options}
      onChange={(option) => field.onChange(option.value)}
      errorMessage={fieldState.error?.message}
    />
  );
}
