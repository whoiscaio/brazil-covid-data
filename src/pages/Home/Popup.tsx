import StateInterface from '../../interfaces/StateInterface';
import { PopupContainer } from './styles';

type PopupProps = {
  hoveredState: StateInterface,
  popupRef: any,
  styles: {
    position: any,
    top: number | undefined,
    left: number | undefined,
  },
}

function Popup({ hoveredState, styles, popupRef }: PopupProps) {
  const {
    state, cases, deaths, suspects,
  } = hoveredState;

  const relationCaseToDeath = (deaths * 100) / cases;

  return (
    <div className="wrapper" style={styles}>
      <PopupContainer ref={popupRef}>
        <h3>{state}</h3>
        <div className="info">
          <p>
            Cases:
            {' '}
            {(cases || 0).toLocaleString('en-US')}
          </p>
          <p>
            Deaths:
            {' '}
            {(deaths || 0).toLocaleString('en-US')}
          </p>
          <p>
            Suspects:
            {' '}
            {(suspects || 0).toLocaleString('en-US')}
          </p>
          <p>
            Death per million:
            {' '}
            {(1000000 * (relationCaseToDeath / 100) || 0).toLocaleString('en-US')}
          </p>
        </div>
      </PopupContainer>
    </div>
  );
}

export default Popup;
