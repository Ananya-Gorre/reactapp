import React from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';


interface PaymentSuccessDialogProps {
  isOpen: boolean;
  onRequestClose: () => void;
}



const PaymentSuccessDialog: React.FC<PaymentSuccessDialogProps> = ({ isOpen, onRequestClose }) => {
  return (
    <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    contentLabel="Payment Success"
    style={{
      content: {
        backgroundColor: 'black', // Set the background color to black
      },
    }}
  >
    <h2 style={{ color: 'white' }}>Payment Successful!</h2>
    <p style={{ color: 'white' }}>Your payment has been processed successfully.</p>
    <button onClick={onRequestClose}>Close</button>
    <Link to="/feedback">
      <button>Feedback</button>
    </Link>
  </Modal>
  );
};

export default PaymentSuccessDialog;
