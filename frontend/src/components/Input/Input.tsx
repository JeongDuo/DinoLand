import { ChangeEventHandler } from 'react';
import styles from './Input.module.scss';

interface Props {
  value: string;
  placeholder?: string;
  className?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

function Input({ value, placeholder = '이름을 입력하세요', className, onChange }: Props) {
  return (
    <input
      className={`${styles.input} ${className}`}
      type='text'
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}

export default Input;
