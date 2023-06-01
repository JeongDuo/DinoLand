import { memo } from 'react';
import styles from './Logo.module.scss';
import { Logo1, Logo2, Logo3, Logo4, Logo5, Logo6, Logo7, Logo8 } from '@/assets/logo';

function Logo() {
  const list = [Logo1, Logo2, Logo3, Logo4, Logo5, Logo6, Logo7, Logo8];

  return (
    <ul className={styles.logo}>
      {list.map((Component, idx) => (
        <li key={idx}>
          <Component />
        </li>
      ))}
    </ul>
  );
}

export default memo(Logo);
