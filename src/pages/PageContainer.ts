import styled, { css } from 'styled-components';

type PageContainerProps = {
  aboutPage?: boolean,
}

const PageContainer = styled.div<PageContainerProps>`
  width: 95vw;
  max-width: 1400px;

  display: flex;
  
  margin: 0 auto;

  &.not-found-page {
    text-align: center;
    padding-top: 10rem;
  }

  ${({ aboutPage }) => (
    aboutPage
      ? css`
        @media (max-width: 999px) {
          flex-direction: column;
          align-items: center;
        }
      `
      : css`
        @media (max-width: 750px) {
          flex-direction: column;
          align-items: center;
        }
      `
  )}
`;

export default PageContainer;
