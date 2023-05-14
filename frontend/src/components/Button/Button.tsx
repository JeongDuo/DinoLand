import { ComponentPropsWithoutRef } from 'react';
import styles from './Button.module.scss';
import { ASSETS_PATH } from '@/constants';
import { ButtonType } from '@/types';

interface Props extends Omit<ComponentPropsWithoutRef<'button'>, 'type'> {
  type: ButtonType;
  width?: string | number;
  height?: string | number;
}

function Button({ children, type, width, height, className, ...props }: Props) {
  const style = {
    backgroundImage: `url(${ASSETS_PATH}${type}.png)`,
    width,
    height,
  };

  return (
    <button type='button' className={`${styles.button} ${className}`} style={style} {...props}>
      {children}
    </button>
  );
}

export default Button;
