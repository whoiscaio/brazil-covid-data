import styled from 'styled-components';

const ImageBoxContainer = styled.div`
  flex: 1;
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

  @media (max-width: 999px) {
    #map-image {
      width: 100%;
    }
  }
`;

export default ImageBoxContainer;
