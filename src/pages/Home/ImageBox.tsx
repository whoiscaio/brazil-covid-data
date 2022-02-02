import { ReactComponent as MapComponent } from '../../assets/images/map.svg';
import { ImageBoxContainer } from './styles';

function ImageBox() {
  return (
    <ImageBoxContainer>
      <MapComponent id="image" />
    </ImageBoxContainer>
  );
}

export default ImageBox;
