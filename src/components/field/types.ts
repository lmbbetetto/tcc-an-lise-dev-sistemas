import type {
  ChangeEvent,
  ChangeEventHandler,
  ElementType,
  InputHTMLAttributes,
  ReactElement,
  TextareaHTMLAttributes
} from 'react';

import type { Size } from '@/theme';

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'onChange'> {
  label?: string;
  size?: Size;
  icon?: ElementType;
  errorMessage?: string;
  required?: boolean;
  onChange: (value: string, event?: ChangeEvent<HTMLInputElement>) => void;
  wrapperClass?: string;
  addMaskValue?: (value: string) => string;
}

export interface TextAreaProps
  extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'> {
  label?: string;
  errorMessage?: string;
  required?: boolean;
  wrapperClass?: string;
}

export interface Option {
  value: string;
  label: string;
}

export interface SelectProps {
  options: Option[];
  value: string;
  onChange: (option: Option) => void;
  label?: string;
  size?: Size;
  errorMessage?: string;
  renderIcon?: (option: Option) => ReactElement;
  className?: string;
  wrapperClass?: string;
  required?: boolean;
}

export interface SelectDetail {
  width: number;
  top: number;
  left: number;
}

export interface SelectDayPicker {
  top: number;
  left: number;
}

export interface AutoCompleteProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'onChange'> {
  options: Option[];
  value: string;
  onChange: (option: Option) => void;
  onClean: () => void;
  label?: string;
  size?: Size;
  errorMessage?: string;
  onlyOption?: boolean;
  loading?: boolean;
  onChangeText?: ChangeEventHandler<HTMLInputElement>;
  renderIcon?: (option: Option) => ReactElement;
  customerFilterOption?: (value: string, options: Option[]) => Option[];
  className?: string;
  required?: boolean;
  wrapperClass?: string;
}
