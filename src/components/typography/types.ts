import type { HeaderVariant, TypographyType } from '@/theme';

export interface Props {
  text: string;
  type: TypographyType;
  variant?: HeaderVariant;
  className?: string;
  rtl?: boolean;
}
