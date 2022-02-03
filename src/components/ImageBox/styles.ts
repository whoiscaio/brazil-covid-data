import styled from 'styled-components';

type ImageBoxContainerProps = {
  breakpoint?: string,
}

const ImageBoxContainer = styled.div<ImageBoxContainerProps>`
  flex: 1;

  text-align: center;

  overflow: hidden;

  #map-image {
    width: 85%;

    margin: 5rem 0;

    transform: translate(10%, -5%);

    path {
      fill: ${({ theme }) => theme.colors.contrast} !important;

      cursor: pointer;
      transition: opacity .1s ease-in;

      &:hover {
        opacity: .6;
      }
    }
  }

  #image {
    width: 85%;
  }

  @media (max-width: 999px) {
    order: 2;

    #map-image {
      width: 100%;
    }

    #image {
      width: 50%;
    }
  }

  @media (max-width: 750px) {
    #image {
      width: 60%;
    }
  }

  @media (max-width: 500px) {
    #image {
      width: 70%;
    }
  }
`;

export default ImageBoxContainer;
