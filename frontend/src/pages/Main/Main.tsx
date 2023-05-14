import { useState } from 'react';
import styles from './Main.module.scss';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { Logo } from '@/components/Logo';
import { Modal } from '@/components/Modal';

const imageArr: HTMLImageElement[] = [];
const images = [
  'src/assets/dino/sheets/mort/dinoSprites-mort.png',
  'src/assets/background-image.jpg',
  'src/assets/close.png',
  'src/assets/modal.png',
  'src/assets/arrow-left.png',
  'src/assets/arrow-right.png',
];

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

  const onMouseOver = () => {
    preloadImage();
  };

  const preloadImage = () => {
    if (imageArr.length > 0) return;
    for (let i = 0; i < images.length; i++) {
      imageArr[i] = new Image();
      imageArr[i].src = images[i];
    }
  };

  return (
    <div className={styles.bg}>
      <Logo />
      <Input
        value={input}
        className={styles['input']}
        onChange={onChangeInput}
        placeholder='이름을 입력하세요(3~10자)'
      />
      <Button type='rectangle' className={styles['button']} onClick={onSubmit} onMouseOver={onMouseOver}>
        START
      </Button>
      <Modal isOpen={isOpen} onClose={closeModal} confirm='CHOICE' onConfirm={onConfirm}>
        <div className={styles['character-select-container']}>
          <span>MORT</span>
          <div className={styles['character']}>
            <Button type='arrow-left' width={84} height={84} />
            <img src='src/assets/dino/sheets/mort/dinoSprites-mort.png' width='auto' height={300} alt='dino' />
            <Button type='arrow-right' width={84} height={84} />
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Main;
