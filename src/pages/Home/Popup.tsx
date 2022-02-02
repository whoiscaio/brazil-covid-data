import { PopupContainer } from './styles';

type PopupProps = {
  hoveredState: any,
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
