import * as icons from './svg';

type IconType = keyof typeof icons;

interface Props {
  icon: IconType;
  color?: string;
  size?: string | number;
}

function Icon({ icon, color, size }: Props) {
  /*eslint import/namespace: ['error', { allowComputed: true }]*/
  const SVGIcon = icons[icon];

  return <SVGIcon style={{ fill: color || 'currentColor', width: size, height: 'auto' }} />;
}

export default Icon;
