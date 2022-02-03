import styled from 'styled-components';

const PopupContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.measures.borderRadius};
  box-shadow: ${({ theme }) => theme.measures.boxShadow};

  padding: 1rem;

  h3, p {
    color: ${({ theme }) => theme.colors.text};
  }

  h3 {
    font-size: 1.4rem;
    margin-bottom: .6rem;
  }

  p {
    font-size: 1.2rem;
  }

`;

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

  @media (max-width: 999px) {
    #image {
      width: 100%;
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

  @media (max-width: 999px) {
    h1 {
      font-size: 4.8rem;
      line-height: 5.4rem;
    }

    p {
      font-size: 1.8rem;
    }
  }

  @media (max-width: 750px) {
    h1, p {
      padding-right: 0;
    }

    h1 {
      font-size: 4.2rem;
      padding-top: 1rem;
    }

    p {
      font-size: 1.6rem;
    }
  }
`;

const HomepageContainer = styled.main`
  width: 95vw;
  max-width: 1400px;

  display: flex;
  
  margin: 0 auto;

  @media (max-width: 750px) {
    flex-direction: column;
    align-items: center;
  }
`;

export { AppInfoContainer, ImageBoxContainer, PopupContainer };
export default HomepageContainer;
