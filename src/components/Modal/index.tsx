import { useContext, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

import StateInterface from '../../interfaces/StateInterface';
import ModalContainer, { Overlay } from './styles';

import closeIcon from '../../assets/images/close.svg';
import { ThemeContext } from '../../contexts/ThemeContext';

type ModalProps = {
  state: StateInterface | null,
  close: () => void,
}

function Modal({ state, close }: ModalProps) {
  const { theme } = useContext(ThemeContext);
  const overlayRef = useRef<HTMLDivElement | null>(null);

  const modalPortal = document.getElementById('modal-portal');
  if (!modalPortal || !state) return null;

  function handleWindowClick(e: MouseEvent) {
    if (e.target === overlayRef.current) {
      close();
    }
  }

  useEffect(() => {
    window.addEventListener('click', handleWindowClick);
  }, []);

  return ReactDOM.createPortal(
    (
      <Overlay ref={overlayRef}>
        <ModalContainer currentTheme={theme}>
          <h3>{state.state}</h3>
          <button type="button" onClick={close}>
            <img src={closeIcon} alt="Close" />
          </button>
          <div className="info">
            <p>
              Cases:
              {' '}
              {(state.cases || 0).toLocaleString('en-US')}
            </p>
            <p>
              Deaths:
              {' '}
              {(state.deaths || 0).toLocaleString('en-US')}
            </p>
            <p>
              Suspects:
              {' '}
              {(state.suspects || 0).toLocaleString('en-US')}
            </p>
          </div>
        </ModalContainer>
      </Overlay>
    ),
    modalPortal,
  );
}

export default Modal;
