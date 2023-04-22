import styles from './Input.module.scss';

interface Props {
  value: string;
  placeholder?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

function Input({ value, placeholder = '이름을 입력하세요', onChange }: Props) {
  return <input className={styles.input} type='text' value={value} placeholder={placeholder} onChange={onChange} />;
}

export default Input;
