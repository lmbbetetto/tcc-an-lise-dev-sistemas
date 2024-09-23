import { ChangeEventHandler, ElementType, ReactNode } from 'react';

import { Size } from '@/theme';

export interface ShapeProps {
  size: Size;
  disabled?: boolean;
  className?: string;
  backgroundIconClassName?: string;
  children: ReactNode;
  checked: boolean;
  backgroundIcon?: ElementType;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export interface IconShapeProps {
  icon: ElementType;
  size: Size;
  checked: boolean;
  className?: string;
}

export interface IconProps {
  icon: ElementType;
  className?: string;
}

export interface DotProps {
  children?: ReactNode;
  className?: string;
  size: Size;
}
