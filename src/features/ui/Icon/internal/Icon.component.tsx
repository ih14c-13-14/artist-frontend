import type { FunctionComponent, SVGAttributes } from 'react';

import featherIcons from './assets/featherIcons';
import selfMadeIcons from './assets/selfMadeIcons/selfMadeIcons';

type BaseProps = SVGAttributes<SVGElement>;
type IconType = FunctionComponent<BaseProps>;

const icons = {
  ...featherIcons,
  ...selfMadeIcons,
} as const satisfies Record<string, IconType>;

export type IconProps = {
  type: keyof typeof icons;
  size?: number | string | undefined;
} & Omit<BaseProps, 'width' | 'height'>;

const Icon = ({ type, size = 24, ...rest }: IconProps) => {
  const IconComponent = icons[type];
  return <IconComponent width={size} height={size} {...rest} />;
};

export default Icon;
