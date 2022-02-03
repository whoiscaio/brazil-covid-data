import styled from 'styled-components';

const NotFoundContainer = styled.div`
  margin: 0 auto;
  
  h1, p {
    color: ${({ theme }) => theme.colors.text};
  }

  h1 {
    font-size: 3.4rem;
    margin-bottom: .4rem;
  }

  p {
    font-size: 1.5rem;
    margin-bottom: 4rem;
  }

  .link-button {
    background: ${({ theme }) => theme.colors.contrast};
    border-radius: ${({ theme }) => theme.measures.borderRadius};
    color: ${({ theme }) => theme.colors.background};
    font-size: 2rem;

    padding: .8rem 2.6rem;

    transition: opacity .1s ease-in;

    &:hover {
      opacity: .7;
    }
  }
`;

export default NotFoundContainer;
