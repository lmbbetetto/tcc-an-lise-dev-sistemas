import type { ReactElement } from 'react';

import { IconProps } from './types';

export function Icon({
  className = '',
  icon: ElementIcon
}: IconProps): ReactElement {
  return <ElementIcon className={className} />;
}
