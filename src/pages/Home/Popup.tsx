import StateInterface from '../../interfaces/StateInterface';
import { PopupContainer } from './styles';

type PopupProps = {
  hoveredState: StateInterface,
}

function Popup({ hoveredState }: PopupProps) {
  console.log(hoveredState);

  return (
    <PopupContainer>
      Popup
    </PopupContainer>
  );
}

export default Popup;
