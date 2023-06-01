import { MouseEventHandler, ReactNode } from 'react';
import styles from './Modal.module.scss';
import { Button } from '@components/Button';
import { Portal } from '@components/Portal';

interface Props {
  children?: ReactNode;
  isOpen: boolean;
  title?: string;
  confirm?: string;
  cancel?: string;
  onClose: MouseEventHandler;
  onConfirm?: MouseEventHandler;
  onCancel?: MouseEventHandler;
}

function Modal({ isOpen, onClose, title, children, confirm, cancel, onConfirm, onCancel }: Props) {
  return isOpen ? (
    <Portal>
      <div className={styles.dimmed} onClick={onClose} />
      <div className={styles.wrapper}>
        <Button type='close' onClick={onClose} width={40} height={40} className={styles['close-button']} />
        {title && <h2 className={styles.title}>{title}</h2>}
        <div className={styles.content}>{children}</div>
        <div className={styles.buttons}>
          {confirm && onConfirm && (
            <Button type='rectangle' onClick={onConfirm}>
              {confirm}
            </Button>
          )}
          {cancel && onCancel && (
            <Button type='rectangle' onClick={onCancel}>
              {cancel}
            </Button>
          )}
        </div>
      </div>
    </Portal>
  ) : null;
}

export default Modal;
