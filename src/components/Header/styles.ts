import styled, { css } from 'styled-components';

type StyledHeaderProps = {
  currentTheme: string,
}

const HeaderContainer = styled.header<StyledHeaderProps>`
  width: 95vw;
  max-width: 1400px;

  display: flex;
  justify-content: space-between;

  margin: 0 auto;
  padding: 2rem 0;

  .actions {
    display: flex;
    align-items: center;

    button {
      display: flex;
      align-items: center;

      cursor: pointer;
      transition: opacity .1s ease-in;

      &:hover {
        opacity: .8;
      }
    }

    ${({ currentTheme }) => currentTheme === 'dark' && css`
      img {
        filter: invert(100%) sepia(100%) saturate(2%) hue-rotate(249deg) brightness(105%) contrast(101%);
      }
    `}
  }

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

    margin-right: 1rem;
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

    transition: opacity, color, .14s ease-in;

    &:hover {
      opacity: .8;
    }
  }

  @media (max-width: 600px) {
    h2 {
      display: none;
    }
  }

  @media (max-width: 300px) {
    a {
      font-size: 1.4rem;
    }
  }
`;

export default HeaderContainer;
