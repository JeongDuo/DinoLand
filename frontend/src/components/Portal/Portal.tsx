import ReactDom from 'react-dom';

interface Props {
  children: React.ReactNode;
}

function Portal({ children }: Props) {
  const $el = document.getElementById('modal-root') as HTMLElement;

  return ReactDom.createPortal(children, $el);
}

export default Portal;
