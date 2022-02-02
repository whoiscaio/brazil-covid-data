import { ReactComponent as MapComponent } from '../../assets/images/map.svg';
import { ImageBoxContainer } from './styles';

type ImageBoxProps = {
  svgRef: any,
}

function ImageBox({ svgRef }: ImageBoxProps) {
  return (
    <ImageBoxContainer>
      <MapComponent id="image" ref={svgRef} />
    </ImageBoxContainer>
  );
}

export default ImageBox;
