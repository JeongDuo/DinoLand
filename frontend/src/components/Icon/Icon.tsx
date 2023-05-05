import * as icons from './svg';

type IconType = keyof typeof icons;

interface Props {
  icon: IconType;
  color?: string;
  size?: string | number;
  className?: string;
}

function Icon({ icon, color, size, className }: Props) {
  /*eslint import/namespace: ['error', { allowComputed: true }]*/
  const SVGIcon = icons[icon];

  return <SVGIcon className={className} style={{ fill: color || 'currentColor', width: size, height: 'auto' }} />;
}

export default Icon;
