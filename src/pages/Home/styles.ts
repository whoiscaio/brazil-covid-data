import styled from 'styled-components';

const PopupContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.measures.borderRadius};
  box-shadow: ${({ theme }) => theme.measures.boxShadow};

  padding: 1rem;

  h3, p {
    color: ${({ theme }) => theme.colors.text};
    white-space: nowrap;
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
  overflow: hidden;

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

export { ImageBoxContainer, PopupContainer };
export default HomepageContainer;
