import { Button } from '@components/Button';
import '@styles/global.scss';

function App() {
  return (
    <>
      <div>DINO LAND</div>
      <Button type='rectangle'>CHOICE</Button>
      <Button type='arrow-left' width={48} height={48} />
      <Button type='arrow-right' width={48} height={48} />
      <Button type='close' width={32} height={32} />
      <Button type='hexagon' width={48} height={48} />
      <Button type='square' width={48} height={48} />
    </>
  );
}

export default App;
