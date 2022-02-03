import styled from 'styled-components';

const PageContainer = styled.div`
  width: 95vw;
  max-width: 1400px;

  display: flex;
  
  margin: 0 auto;

  &.not-found-page {
    text-align: center;
    padding-top: 10rem;
  }

  @media (max-width: 750px) {
    flex-direction: column;
    align-items: center;
  }
`;

export default PageContainer;
