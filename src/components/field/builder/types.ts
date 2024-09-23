import type {
  ElementType,
  HTMLAttributes,
  InputHTMLAttributes,
  LabelHTMLAttributes,
  OptionHTMLAttributes,
  ReactNode,
  SelectHTMLAttributes,
  TextareaHTMLAttributes
} from 'react';
import { SelectSingleEventHandler } from 'react-day-picker';

import type { Size } from '@/theme';

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  isPasswordType: boolean;
  size: Size;
  withIcon?: boolean;
}

export interface TextAreaProps
  extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'> {}

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  text: ReactNode;
  isRequired?: boolean;
}

export interface ErrorMessageProps {
  children: ReactNode;
}

export interface IconProps {
  icon: ElementType;
  size: Size;
  className?: string;
}

export interface ShowPasswordButtonProps {
  size: Size;
  visible: boolean;
  className?: string;
  onClick: () => void;
}

export interface DatePickerProps {
  size: Size;
  visible: boolean;
  className?: string;
  onClick: () => void;
  selectedDay: Date | undefined;
  onDateSelect: SelectSingleEventHandler;
  onToggleVisible: () => void;
}

export interface SelectProps
  extends Omit<SelectHTMLAttributes<HTMLButtonElement>, 'size' | 'children'> {
  size: Size;
}

export interface OptionProps extends OptionHTMLAttributes<HTMLOptionElement> {
  size: Size;
}

export interface WrapperOptionProps extends HTMLAttributes<HTMLDivElement> {
  size: Size;
}
