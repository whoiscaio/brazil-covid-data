import styled from 'styled-components';

const Overlay = styled.div`
  background-color: #00000088;

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  cursor: pointer;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  background: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.measures.borderRadius};
  
  position: relative;

  width: 95vw;
  max-width: 400px;

  padding: 2rem;

  cursor: initial;
  z-index: 2000;


  h3 {
    font-size: 3rem;

    margin-bottom: 2rem;
  }

  p {
    font-size: 1.6rem;
  }

  button {
    position: absolute;
    top: 1rem;
    right: 1rem;

    cursor: pointer;
  }
`;

export { Overlay };
export default ModalContainer;
