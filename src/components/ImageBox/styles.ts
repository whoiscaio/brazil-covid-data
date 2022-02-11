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
      cursor: pointer;
      transition: opacity .1s ease-in;

      &:hover {
        opacity: .6;
      }
    }

    g {
      &.low-risk path {
        fill: ${({ theme }) => theme.colors.map.fullGreen} !important;
      }

      &.midlow-risk path {
        fill: ${({ theme }) => theme.colors.map.midGreenYellow} !important;
      }

      &.mid-risk path {
        fill: ${({ theme }) => theme.colors.map.fullYellow} !important;
      }

      &.midhigh-risk path {
        fill: ${({ theme }) => theme.colors.map.midYellowRed} !important;
      }

      &.high-risk path {
        fill: ${({ theme }) => theme.colors.map.fullRed} !important;
      }
    }
  }

  #image {
    width: 85%;
  }

  @media (max-width: 999px) {
    order: 2;

    #map-image {
      width: 75%;

      margin: 0;
      margin-top: 2rem;

      transform: none;
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

  @media (max-width: 550px) {
    #map-image {
      width: 85%;
    }
  }

  @media (max-width: 500px) {
    #image {
      width: 70%;
    }
  }

  @media (max-width: 450px) {
    #map-image {
      width: 100%;
    }
  }
`;

export default ImageBoxContainer;
