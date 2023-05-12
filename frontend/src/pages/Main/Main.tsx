import { useState } from 'react';
import styles from './Main.module.scss';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { Logo } from '@/components/Logo';
import { Modal } from '@/components/Modal';

function Main() {
  const [input, setInput] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const onChangeInput: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value } = e.target;
    if (value.length > 10) return;

    setInput(value);
  };

  const validateInputLength = (input: string, min: number, max: number) => {
    const length = input.length;
    if (length < min || length > max) return false;

    return true;
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const onConfirm = (e: React.MouseEvent<HTMLButtonElement>) => {
    alert(e);
  };

  const onSubmit: React.MouseEventHandler<HTMLButtonElement> = () => {
    if (!validateInputLength(input, 3, 10)) return;

    openModal();
  };

  return (
    <div className={styles.bg}>
      <Logo />
      <Input value={input} className={styles.input} onChange={onChangeInput} placeholder='이름을 입력하세요(3~10자)' />
      <Button type='rectangle' className={styles.button} onClick={onSubmit}>
        START
      </Button>
      <Modal isOpen={isOpen} onClose={closeModal} confirm='CHOICE' onConfirm={onConfirm}></Modal>
    </div>
  );
}

export default Main;
