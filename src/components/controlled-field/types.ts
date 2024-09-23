import type {
  ChangeEventHandler,
  ElementType,
  HTMLInputTypeAttribute
} from 'react';
import type { FieldValues, UseControllerProps } from 'react-hook-form';

import type {
  Option,
  InputProps as RawInputProps,
  SelectProps as RawSelectProps,
  TextAreaProps as RawTextAreaProps
} from '@/components/field/types';
import type { Size } from '@/theme';

export interface InputProps<Values extends FieldValues>
  extends UseControllerProps<Values>,
    Omit<
      RawInputProps,
      | 'name'
      | 'defaultValue'
      | 'disabled'
      | 'value'
      | 'onChange'
      | 'onBlur'
      | 'errorMessage'
    > {
  wrapperClass?: string;
  type?: HTMLInputTypeAttribute;
}

export interface TextAreaProps<Values extends FieldValues>
  extends UseControllerProps<Values>,
    Omit<
      RawTextAreaProps,
      | 'name'
      | 'defaultValue'
      | 'disabled'
      | 'value'
      | 'onChange'
      | 'onBlur'
      | 'errorMessage'
    > {
  wrapperClass?: string;
}

export interface AutoCompleteProps<Values extends FieldValues>
  extends UseControllerProps<Values>,
    Omit<
      RawInputProps,
      | 'name'
      | 'defaultValue'
      | 'disabled'
      | 'value'
      | 'onChange'
      | 'onBlur'
      | 'errorMessage'
    > {
  options: Option[];
  wrapperClass?: string;
  onlyOption?: boolean;
  loading?: boolean;
  type?: HTMLInputTypeAttribute;
  onChangeText?: ChangeEventHandler<HTMLInputElement>;
}

export interface ToggleProps<Values extends FieldValues>
  extends UseControllerProps<Values> {
  label?: string;
  labelPosition?: 'left' | 'right' | 'top' | 'bottom';
  backgroundIcon?: ElementType;
  size?: Size;
  dotIcon?: ElementType;
}

export interface SelectProps<Values extends FieldValues>
  extends UseControllerProps<Values>,
    Omit<RawSelectProps, 'value' | 'onChange'> {}
