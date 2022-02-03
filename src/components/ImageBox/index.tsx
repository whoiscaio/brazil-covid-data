import { ReactNode } from 'react';
import ImageBoxContainer from './styles';

type ImageBoxProps = {
  children: ReactNode,
}

function ImageBox({ children }: ImageBoxProps) {
  return (
    <ImageBoxContainer>
      {children}
    </ImageBoxContainer>
  );
}

export default ImageBox;
