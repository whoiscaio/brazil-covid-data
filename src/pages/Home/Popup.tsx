import StateInterface from '../../interfaces/StateInterface';
import { PopupContainer } from './styles';

type PopupProps = {
  hoveredState: StateInterface,
  styles: {
    position: any,
    top: number | undefined,
    left: number | undefined,
  },
}

function Popup({ hoveredState, styles }: PopupProps) {
  const {
    state, cases, deaths, suspects,
  } = hoveredState;

  return (
    <div className="wrapper" style={styles}>
      <PopupContainer>
        <h3>{state}</h3>
        <div className="info">
          <p>
            Cases:
            {' '}
            {cases}
          </p>
          <p>
            Deaths:
            {' '}
            {deaths}
          </p>
          <p>
            Suspects:
            {' '}
            {suspects}
          </p>
        </div>
      </PopupContainer>
    </div>
  );
}

export default Popup;
