import { MouseEvent, useEffect, useRef, useState } from 'react';
import styles from './Chatting.module.scss';
import { CHATTING_INPUT_TYPE } from '@/constants';
import { ChattingInputType } from '@/types';
import { isChattingInputType } from '@/utils/type.guard';

interface Props {
  type: ChattingInputType;
  setType: React.Dispatch<React.SetStateAction<ChattingInputType>>;
}

function ChattingInputSelect({ type, setType }: Props) {
  const [open, setOpen] = useState(false);
  const listRef = useRef<HTMLUListElement | null>(null);
  const containerRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const handleOutsideClose = (e: Event) => {
      const target = e.target as HTMLElement;

      if (!listRef.current || !containerRef.current) return;
      if (open && !listRef.current.contains(target) && !containerRef.current.contains(target)) setOpen(false);
    };

    document.addEventListener('click', handleOutsideClose);

    return () => document.removeEventListener('click', handleOutsideClose);
  }, [open]);

  const onToggleSelect = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setOpen((prev) => !prev);
  };

  const onChangeType = (e: MouseEvent<HTMLUListElement>) => {
    const target = e.target as HTMLUListElement;
    const type = target.dataset['value'];

    if (!type || !isChattingInputType(type)) return;
    setType(type);
    setOpen(false);
  };

  return (
    <form className={styles['input-type-container']}>
      <button type='button' className={styles['input-type']} ref={containerRef} onClick={onToggleSelect}>
        {CHATTING_INPUT_TYPE[type]}
      </button>
      {open && (
        <ul className={styles['input-type-list']} ref={listRef} onClick={onChangeType}>
          {Object.keys(CHATTING_INPUT_TYPE).map((key) => {
            if (!isChattingInputType(key)) return;
            return (
              <li key={key} data-value={key}>
                {CHATTING_INPUT_TYPE[key]}
              </li>
            );
          })}
        </ul>
      )}
    </form>
  );
}

export default ChattingInputSelect;
