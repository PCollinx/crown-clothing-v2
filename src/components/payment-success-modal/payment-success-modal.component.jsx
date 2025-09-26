import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import {
  ModalOverlay,
  ModalContainer,
  ModalContent,
  SuccessIcon,
  ModalTitle,
  ModalMessage,
  ButtonContainer,
} from "./payment-success-modal.styles";

const PaymentSuccessModal = ({ isOpen, onClose, onContinueShopping }) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContainer>
        <ModalContent>
          <SuccessIcon>✓</SuccessIcon>
          <ModalTitle>Payment Successful!</ModalTitle>
          <ModalMessage>
            Thank you for your purchase. Your order has been processed
            successfully.
          </ModalMessage>
          <ButtonContainer>
            <Button
              buttonType={BUTTON_TYPE_CLASSES.inverted}
              onClick={onContinueShopping}
            >
              Continue Shopping
            </Button>
          </ButtonContainer>
        </ModalContent>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default PaymentSuccessModal;
