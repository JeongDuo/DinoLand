import { useState } from 'react';
import styles from './ModalCharacterSelect.module.scss';
import { Button } from '@/components/Button';

const CHARACTER_LIST = ['mort', 'doux', 'tard', 'vita'];

function ModalCharactorSelect() {
  const [characterIdx, setCharacterIdx] = useState(0);

  const handlePrevClick = () => setCharacterIdx((prev) => (prev === 0 ? CHARACTER_LIST.length - 1 : prev - 1));

  const handleNextClick = () => setCharacterIdx((prev) => (prev + 1) % CHARACTER_LIST.length);

  return (
    <div className={styles['character-select-container']}>
      <span>{CHARACTER_LIST[characterIdx].toUpperCase()}</span>
      <div className={styles['character']}>
        <Button type='arrow-left' width={84} height={84} onClick={handlePrevClick} />
        <img
          src={`/assets/dino/${CHARACTER_LIST[characterIdx]}.png`}
          width='auto'
          height={300}
          alt={CHARACTER_LIST[characterIdx]}
        />
        <Button type='arrow-right' width={84} height={84} onClick={handleNextClick} />
      </div>
    </div>
  );
}

export default ModalCharactorSelect;
