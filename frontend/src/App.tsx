import { useState } from 'react';
import { Input } from './components/Input';
import { Button } from '@components/Button';
import { Icon } from '@components/Icon';
import '@styles/global.scss';

function App() {
  const [name, setName] = useState('');

  const onChangeInput: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setName(e.target.value);
  };

  return (
    <div style={{ background: 'gray' }}>
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
      <Input value={name} onChange={onChangeInput} placeholder='이름을 입력하세요(3~15자)' />
    </div>
  );
}

export default App;
