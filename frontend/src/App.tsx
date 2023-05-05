import { useState } from 'react';
import { Chatting } from './components/Chatting';
import { Button } from '@components/Button';
import { Icon } from '@components/Icon';
import { Input } from '@components/Input';
import { Modal } from '@components/Modal';
import '@styles/global.scss';

function App() {
  const [name, setName] = useState('');

  const onChangeInput: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setName(e.target.value);
  };

  const [isOpen, setIsOpen] = useState(false);
  const onToggleModal = () => setIsOpen((prev) => !prev);

  const onConfirm = (e: React.MouseEvent<HTMLButtonElement>) => {
    alert(e);
  };

  const onCancel = () => {
    alert('정성윤 바보');
  };

  return (
    <div>
      <div>DINO LAND</div>
      <Icon icon='arrowLeft' color='yellow' />
      <Icon icon='arrowRight' color='yellow' />
      <Icon icon='mikeOff' color='yellow' />
      <Icon icon='mikeOn' color='blue' />
      <Icon icon='musicOff' color='yellow' />
      <Icon icon='musicOn' color='yellow' />
      <Icon icon='shareOff' color='yellow' />
      <Icon icon='shareOn' color='yellow' size={100} />
      <Icon icon='videoOn' color='yellow' />
      <Icon icon='videoOff' color='yellow' />
      <Icon icon='menu' color='yellow' />
      <Icon icon='chat' color='yellow' />
      <Button type='rectangle'>CHOICE</Button>
      <Button type='arrow-left' width={48} height={48} />
      <Button type='arrow-right' width={48} height={48} />
      <Button type='close' width={32} height={32} />
      <Button type='hexagon' width={48} height={48} />
      <Button type='square' width={48} height={48} />
      <Input value={name} onChange={onChangeInput} placeholder='이름을 입력하세요(3~10자)' />
      <Modal
        isOpen={isOpen}
        onClose={onToggleModal}
        confirm='CHOICE'
        cancel='CANCEL'
        onConfirm={onConfirm}
        onCancel={onCancel}
        title='공지사항'
      ></Modal>
      <button onClick={onToggleModal} style={{ background: 'red' }}>
        modal on
      </button>
      <Chatting />
    </div>
  );
}

export default App;
