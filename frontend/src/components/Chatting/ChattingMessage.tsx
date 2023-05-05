import styles from './Chatting.module.scss';
import { MessageType } from '@/types';

interface Props {
  type: MessageType;
  message: string;
  nickname: string;
}

function ChattingMessage({ type, message, nickname }: Props) {
  return (
    <li className={`${styles['chatting-msg']} ${styles[type]}`}>
      <p>
        <b>{nickname}:</b> {message}
      </p>
    </li>
  );
}

export default ChattingMessage;
