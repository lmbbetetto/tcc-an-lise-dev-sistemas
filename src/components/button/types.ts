import type {
  ButtonHTMLAttributes,
  ElementType,
  MouseEventHandler
} from 'react';

import type { ButtonVariant, ButtonSize } from '@/theme';

export interface Props
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  text: string;
  icon?: ElementType;
  size?: ButtonSize;
  variant?: ButtonVariant;
  disabled?: boolean;
  loading?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
