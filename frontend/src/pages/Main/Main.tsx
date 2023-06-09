import { ChangeEventHandler, MouseEventHandler, useRef, useState } from 'react';
import styles from './Main.module.scss';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { Logo } from '@/components/Logo';
import { Modal } from '@/components/Modal';
import ModalCharactorSelect from '@/components/Modal/ModalCharactorSelect';
import { MODAL_ASSETS } from '@/constants';
import useModal from '@/hooks/useModal';
import { getImageLoader } from '@/utils/image';
import { validateInputLength } from '@/utils/validator';

function Main() {
  const [input, setInput] = useState('');
  const imageLoaderRef = useRef(getImageLoader());
  const { isOpen, openModal, closeModal } = useModal();

  const onChangeInput: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value } = e.target;
    if (value.length > 10) return;
    setInput(value);
  };

  const onConfirm: MouseEventHandler<HTMLButtonElement> = (e) => {
    alert(e);
  };

  const onSubmit: MouseEventHandler<HTMLButtonElement> = () => {
    if (!validateInputLength(input, 3, 10)) return;
    openModal();
  };

  const onMouseOver = () => {
    imageLoaderRef.current(MODAL_ASSETS);
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
        <ModalCharactorSelect />
      </Modal>
    </div>
  );
}

export default Main;
