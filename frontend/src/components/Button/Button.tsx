import styles from './Button.module.scss';
import { ASSETS_PATH } from '@/constants';
import { ButtonType } from '@/types';

interface Props {
  children?: React.ReactNode;
  type: ButtonType;
  width?: string | number;
  height?: string | number;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

function Button({ children, type, width, height, onClick }: Props) {
  const style = {
    backgroundImage: `url(${ASSETS_PATH}${type}.png)`,
    width,
    height,
  };

  return (
    <button type='button' className={styles.button} style={style} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
