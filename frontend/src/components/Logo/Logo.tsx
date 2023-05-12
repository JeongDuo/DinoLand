import styles from './Logo.module.scss';
import { Logo1, Logo2, Logo3, Logo4, Logo5, Logo6, Logo7, Logo8 } from '@/assets/logo';

function Logo() {
  const list = [Logo1, Logo2, Logo3, Logo4, Logo5, Logo6, Logo7, Logo8].map((item) => ({
    Component: item,
    key: String(item),
  }));

  return (
    <ul className={styles.logo}>
      {list.map(({ Component, key }) => (
        <li key={key}>
          <Component />
        </li>
      ))}
    </ul>
  );
}

export default Logo;
