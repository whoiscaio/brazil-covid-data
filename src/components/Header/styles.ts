import styled from 'styled-components';

const HeaderContainer = styled.header`
  max-width: 1400px;

  display: flex;
  justify-content: space-between;

  margin: 0 auto;
  padding: 2rem;

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
    font-size: 1.6rem;
  }
`;

export default HeaderContainer;
