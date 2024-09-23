'use client';
import { ChangeEventHandler, type ReactElement } from 'react';
import { FieldValues, useController } from 'react-hook-form';

import { AutoComplete } from '@/components/field';

import type { AutoCompleteProps } from './types';

export function ControlledAutoComplete<Values extends FieldValues>({
  name,
  rules,
  shouldUnregister,
  defaultValue,
  control,
  disabled,
  options,
  onChangeText,
  onlyOption = false,
  loading = false,
  ...props
}: AutoCompleteProps<Values>): ReactElement {
  const { field, fieldState } = useController({
    name,
    rules,
    shouldUnregister,
    defaultValue,
    control,
    disabled
  });

  const handleOnChangeText: ChangeEventHandler<HTMLInputElement> = (event) => {
    if (!onlyOption) {
      field.onChange(event);
    }

    if (onChangeText) {
      onChangeText(event);
    }
  };

  return (
    <AutoComplete
      {...field}
      {...props}
      options={options}
      onChange={(option) => field.onChange(option.value)}
      onChangeText={handleOnChangeText}
      onClean={() => field.onChange('')}
      errorMessage={fieldState.error?.message}
      onlyOption={onlyOption}
      loading={loading}
    />
  );
}
