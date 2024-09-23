import { useState } from 'react';

import { UseToggleReturn } from './types';

export function useToggle(initalState?: boolean): UseToggleReturn {
  const [value, setValue] = useState<boolean>(Boolean(initalState));

  const on = (): void => setValue(true);

  const off = (): void => setValue(false);

  const toggle = (): void => setValue((state) => !state);

  return { on, off, toggle, value };
}
