import type { ButtonHTMLAttributes, ElementType, ReactNode } from 'react';

import type { ButtonVariant, ButtonSize } from '@/theme';

export interface ShapeProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size: ButtonSize;
  variant: ButtonVariant;
  className?: string;
}

export interface TextProps {
  children: ReactNode;
  size: ButtonSize;
  variant: ButtonVariant;
  className?: string;
}

export interface IconProps {
  icon: ElementType;
  size: ButtonSize;
  variant: ButtonVariant;
  className?: string;
}
