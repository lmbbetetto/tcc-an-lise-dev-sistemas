'use client';
import type { ReactElement } from 'react';
import { FieldValues, useController } from 'react-hook-form';

import { Textarea } from '@/components/field';

import type { TextAreaProps } from './types';

export function ControlledTextArea<Values extends FieldValues>({
  name,
  rules,
  shouldUnregister,
  defaultValue,
  control,
  disabled,
  ...props
}: TextAreaProps<Values>): ReactElement {
  const { field, fieldState } = useController({
    name,
    rules,
    shouldUnregister,
    defaultValue,
    control,
    disabled
  });
  return (
    <Textarea {...field} {...props} errorMessage={fieldState.error?.message} />
  );
}
