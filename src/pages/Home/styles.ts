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

  display: flex;
  flex-direction: column;
  justify-content: center;

  h1, p {
    color: ${({ theme }) => theme.colors.text};
    padding-right: 8rem;
  }

  h1 {
    font-size: 6rem;
    line-height: 6.8rem;

    margin-bottom: 2rem;
  }

  p {
    font-size: 2rem;
  }
`;

const HomepageContainer = styled.main`
  width: 95vw;
  max-width: 1400px;

  display: flex;
  
  margin: 0 auto;
`;

export { AppInfoContainer, ImageBoxContainer };
export default HomepageContainer;
