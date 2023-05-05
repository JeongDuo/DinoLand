import { useEffect, useRef, useState } from 'react';
import styles from './Chatting.module.scss';
import ChattingInputSelect from './ChattingInputSelect';
import { CHATTING_INPUT_TYPE, PLACEHOLDER_INPUT_DEFAULT, PLACEHOLDER_INPUT_PRIVATE } from '@/constants';
import { ChattingInputType } from '@/types';

function ChattingInput() {
  const [type, setType] = useState<ChattingInputType>('all');
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (!inputRef.current) return;
    if (CHATTING_INPUT_TYPE[type] !== CHATTING_INPUT_TYPE.private) {
      inputRef.current.placeholder = PLACEHOLDER_INPUT_DEFAULT;
      return;
    }

    inputRef.current.placeholder = PLACEHOLDER_INPUT_PRIVATE;
  }, [type]);

  return (
    <div className={styles['input-container']}>
      <ChattingInputSelect type={type} setType={setType} />
      <input className={styles['input']} type='text' placeholder='메세지를 입력하세요.' ref={inputRef} />
    </div>
  );
}

export default ChattingInput;
