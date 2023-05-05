import styles from './Chatting.module.scss';
import ChattingInput from './ChattingInput';
import ChattingMessage from './ChattingMessage';
import { Icon } from '@components/Icon';

function Chatting() {
  return (
    <div className={styles['background']}>
      <Icon icon='close' size={12} className={styles['close-btn']} />
      <div className={styles['chatting-container']}>
        <ul className={styles['msg-list']}>
          <ChattingMessage type='normal' nickname='tunggary' message='채팅 메시지입니다.' />
          <ChattingMessage type='normal' nickname='tunggary' message='채팅 메시지입니다.' />
          <ChattingMessage type='private' nickname='tunggary' message='채팅 메시지입니다.' />
          <ChattingMessage
            type='group'
            nickname='일이삼사오육칠팔구십'
            message='채팅 메시지입니다.채팅 메시지입니다.채팅 메시지입니다.채팅 메시지입니다.채팅 메시지입니다.채팅 메시지입니다.채팅 메시지입니다.채팅 메시지입니다.채팅 메시지입니다.채팅 메시지입니다.채팅 메시지입니다.'
          />
          <ChattingMessage
            type='group'
            nickname='abcdefghijklnmo'
            message='채팅 메시지입니다.채팅 메시지입니다.채팅 메시지입니다.채팅 메시지입니다.채팅 메시지입니다.채팅 메시지입니다.채팅 메시지입니다.채팅 메시지입니다.채팅 메시지입니다.채팅 메시지입니다.채팅 메시지입니다.'
          />
          <ChattingMessage
            type='group'
            nickname='asdf1234'
            message='채팅 메시지입니다.채팅 메시지입니다.채팅 메시지입니다.채팅 메시지입니다.채팅 메시지입니다.채팅 메시지입니다.채팅 메시지입니다.채팅 메시지입니다.채팅 메시지입니다.채팅 메시지입니다.채팅 메시지입니다.'
          />
        </ul>
      </div>
      <ChattingInput />
    </div>
  );
}

export default Chatting;
