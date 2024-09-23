import type { ReactElement } from 'react';

import { IconChevronDown } from '@tabler/icons-react';
import { twMerge } from 'tailwind-merge';

import { COMPONENT_STYLE } from '@/theme';

import type { SelectProps } from './types';

const { select } = COMPONENT_STYLE;

export function Select({
  value,
  size,
  className = '',
  ...props
}: SelectProps): ReactElement {
  const { padding, text, iconSize, ...sizeTheme } = select.size[size];
  const { iconColor, ...apperance } = select.apperance;

  return (
    <button
      {...props}
      type="button"
      role="combobox"
      aria-controls={props['aria-controls']}
      aria-expanded={props['aria-expanded']}
      className={twMerge(
        'flex justify-between items-center',
        Object.values(padding),
        Object.values(text),
        Object.values(sizeTheme),
        Object.values(select.shape),
        apperance.active,
        apperance.backgroundColor,
        apperance.borderColor,
        apperance.disabled,
        apperance.error,
        apperance.focus,
        apperance.hover,
        apperance.placeholder,
        apperance.textColor,
        apperance.outline,
        className
      )}
    >
      <span>{value ?? ''}</span>
      <IconChevronDown
        size={16}
        className={twMerge(
          'aria-expanded:rotate-180 transition',
          iconSize,
          iconColor,
          className
        )}
      />
    </button>
  );
}
