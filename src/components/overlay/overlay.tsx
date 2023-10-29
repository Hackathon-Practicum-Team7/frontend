import {FunctionComponent, PropsWithChildren} from 'react';
import overlayStyles from './overlay.module.css';

interface Props {
  onClose: () => void
}

export const Overlay: FunctionComponent<PropsWithChildren<Props>> = ({onClose, children}) => {
  return (
    <div className={overlayStyles.overlay} onClick={onClose}>{children}</div>
  )
}
