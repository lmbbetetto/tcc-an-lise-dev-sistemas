'use client';
import {
  type ChangeEventHandler,
  forwardRef,
  useCallback,
  useMemo,
  useState,
  type ReactElement
} from 'react';

import { format, parse } from 'date-fns';
import { twMerge } from 'tailwind-merge';

import { useToggle } from '@/hooks/use-toggle';

import * as Builder from './builder';
import type { InputProps } from './types';
import { formatDateInput } from '@/utils/helpers';

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  {
    label,
    icon,
    errorMessage,
    type,
    onChange,
    required = false,
    addMaskValue,
    wrapperClass = '',
    size = 'medium',
    ...props
  },
  ref
): ReactElement {
  const [showPassword, setShowPassword] = useState(false);
  const showDatePicker = useToggle(false);

  const handleOnToggleShowPassword = useCallback(
    () => setShowPassword((state) => !state),
    []
  );

  const handleOnToggleDatePicker = useCallback(
    () => showDatePicker.toggle(),
    [showDatePicker]
  );

  const withIcon = useMemo(() => Boolean(icon), [icon]);

  const handleOnDatePicked = (date: Date | undefined): void => {
    onChange(date ? format(date, 'dd/MM/yyyy') : '');
    handleOnToggleDatePicker();
  };

  const handleOnChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    if (addMaskValue) {
      event.target.value = addMaskValue(event.target.value);
    }

    if (type === 'date') {
      onChange(
        formatDateInput(event.target.value, 'dd/MM/yyyy'),
        event
      );
    } else {
      onChange(event.target.value, event);
    }
  };

  return (
    <main className={twMerge('flex flex-col w-full', wrapperClass)}>
      <Builder.Label
        text={<div className="flex gap-2">{label}</div>}
        isRequired={required}
      >
        <Builder.Input
          {...props}
          ref={ref}
          size={size}
          onChange={handleOnChange}
          data-error={Boolean(errorMessage)}
          withIcon={withIcon}
          isPasswordType={type === 'password'}
          type={
            (type === 'password' && showPassword) || type === 'date'
              ? 'text'
              : type
          }
        />
        {withIcon ? <Builder.Icon icon={icon!} size={size} /> : null}
        {type === 'password' ? (
          <Builder.ShowPasswordButton
            visible={showPassword}
            onClick={handleOnToggleShowPassword}
            size={size}
          />
        ) : null}
        {type === 'date' ? (
          <Builder.DatePicker
            onClick={handleOnToggleDatePicker}
            size={size}
            visible={showDatePicker.value}
            onToggleVisible={handleOnToggleDatePicker}
            onDateSelect={handleOnDatePicked}
            selectedDay={
              typeof props.value === 'string' && props.value.length === 10
                ? parse(props.value, 'dd/MM/yyyy', new Date())
                : undefined
            }
          />
        ) : null}
      </Builder.Label>
      <Builder.ErrorMessage>{errorMessage}</Builder.ErrorMessage>
    </main>
  );
});
