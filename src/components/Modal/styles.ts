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

  z-index: 1000;
`;

const ModalContainer = styled.div`
  background: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.measures.borderRadius};

  padding: 2rem;
`;

export { Overlay };
export default ModalContainer;
