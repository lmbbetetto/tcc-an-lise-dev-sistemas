'use client';
import type { ReactElement } from 'react';
import { FieldValues, useController } from 'react-hook-form';

import { Input } from '@/components/field';

import type { InputProps } from './types';

export function ControlledInput<Values extends FieldValues>({
  name,
  rules,
  shouldUnregister,
  defaultValue,
  control,
  disabled,
  ...props
}: InputProps<Values>): ReactElement {
  const { field, fieldState } = useController({
    name,
    rules,
    shouldUnregister,
    defaultValue,
    control,
    disabled
  });

  return (
    <Input {...field} {...props} errorMessage={fieldState.error?.message} />
  );
}
