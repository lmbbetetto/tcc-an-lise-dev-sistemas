import type { ChangeEventHandler, ElementType } from 'react';

import type { Size } from '@/theme';

export interface Props {
  onChange: ChangeEventHandler<HTMLInputElement>;
  backgroundIcon?: ElementType;
  size?: Size;
  dotIcon?: ElementType;
  checked: boolean;
  disabled?: boolean;
}
