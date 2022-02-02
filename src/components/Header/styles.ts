import styled from 'styled-components';

const HeaderContainer = styled.header`
  width: 95vw;
  max-width: 1400px;

  display: flex;
  justify-content: space-between;

  margin: 0 auto;
  padding: 2rem 0;

  .icon {

    a {
      width: 100%;

      display: flex;
      align-items: center;
    }

    img {
      width: 6rem;

      margin-right: .8rem;
    }
  }

  ul {
    height: 100%;

    display: flex;
  }

  li {
    height: 100%;

    display: flex;
    align-items: center;

    padding: 0 .8rem;
  }

  a {
    color: ${({ theme }) => theme.colors.text};
    font-size: 1.6rem;

    transition: opacity .14s ease-in;

    &:hover {
      opacity: .8;
    }
  }

  @media (max-width: 600px) {
    h2 {
      display: none;
    }
  }
`;

export default HeaderContainer;
