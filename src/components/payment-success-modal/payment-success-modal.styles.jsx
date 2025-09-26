import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  max-width: 400px;
  width: 90%;
  animation: slideIn 0.3s ease-out;

  @keyframes slideIn {
    from {
      transform: scale(0.8);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }
`;

export const ModalContent = styled.div`
  padding: 40px 30px;
  text-align: center;
`;

export const SuccessIcon = styled.div`
  font-size: 60px;
  color: #4caf50;
  margin-bottom: 20px;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #e8f5e8;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
`;

export const ModalTitle = styled.h2`
  color: #333;
  margin-bottom: 15px;
  font-size: 24px;
  font-weight: 600;
`;

export const ModalMessage = styled.p`
  color: #666;
  margin-bottom: 30px;
  line-height: 1.6;
  font-size: 16px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;
