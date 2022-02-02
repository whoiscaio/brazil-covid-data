import styled from 'styled-components';

const ImageBoxContainer = styled.div`
  flex: 1;

  #image {
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
`;

const AppInfoContainer = styled.div`
  flex: 1;
`;

const HomepageContainer = styled.main`
  width: 95vw;
  max-width: 1400px;

  display: flex;
  
  margin: 0 auto;
`;

export { AppInfoContainer, ImageBoxContainer };
export default HomepageContainer;
