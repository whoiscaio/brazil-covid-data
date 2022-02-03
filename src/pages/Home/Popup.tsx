import StateInterface from '../../interfaces/StateInterface';
import { PopupContainer } from './styles';

type PopupProps = {
  hoveredState: StateInterface, // eslint-disable-line
  styles: {
    position: any,
    top: number | undefined,
    left: number | undefined,
  },
}

function Popup({ styles }: PopupProps) {
  return (
    <div className="wrapper" style={styles}>
      <PopupContainer>
        Popup
      </PopupContainer>
    </div>
  );
}

export default Popup;
