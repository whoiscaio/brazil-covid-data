import styled from 'styled-components';

const AppInfoContainer = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;

  pointer-events: none;

  h1, > p {
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

  a {
    color: ${({ theme }) => theme.colors.contrast};
  }

  .all-country-overview {
    max-width: 500px;

    background: ${({ theme }) => theme.colors.contrast};
    border-radius: ${({ theme }) => theme.measures.borderRadius};

    display: flex;
    justify-content: space-around;

    margin-top: 2rem;
    padding: 1rem 0;

    p, span {
      color: #F6EDD9;
    }

    span {
      font-size: 1.4rem;
      margin-bottom: .6rem;
    }

    div {
      flex: 1;
      
      
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      &.deaths {
        border-right: 1px solid ${({ theme }) => theme.colors.background};
        border-left: 1px solid ${({ theme }) => theme.colors.background};
      }
    }
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

export default AppInfoContainer;
