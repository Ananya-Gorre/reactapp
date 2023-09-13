import React , {useState} from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link  } from 'react-router-dom';
import "../styles/payment.css"
import { useDispatch } from 'react-redux';
import { removeallcart } from '../slice/cartSlice';
import PaymentSuccessDialog from './PaymentSuccessDialog';




export default function Payment() {
  const initialValues = {
    cardNumber: '',
    cardName: '',
    expirationDate: '',
    cvv: '',
  };


  const dispatch = useDispatch();


  const validationSchema = Yup.object().shape({
    cardNumber: Yup.string()
      .required('Card number is required')
      .matches(/^\d{16}$/, 'Card number must be 16 digits'),
    cardName: Yup.string().required('Cardholder name is required'),
    expirationDate: Yup.string()
      .required('Expiration date is required')
      .matches(/^(0[1-9]|1[0-2])\/\d{2}$/, 'Expiration date must be in MM/YY format'),
    cvv: Yup.string()
      .required('CVV is required')
      .matches(/^\d{3,4}$/, 'CVV must be 3 or 4 digits'),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      console.log('Payment form submitted:', values);
      dispatch(removeallcart());
      openSuccessDialog();
    },
  });

  const [isSuccessDialogOpen, setIsSuccessDialogOpen] = useState(false);

  const openSuccessDialog = () => {
    setIsSuccessDialogOpen(true);
  };

  const closeSuccessDialog = () => {
    setIsSuccessDialogOpen(false);
  };


  return (
    <div className="payment-container">
      <h1>Payment Page</h1>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="cardNumber">Card Number:</label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            value={formik.values.cardNumber}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.cardNumber && formik.errors.cardNumber ? (
            <div className="error">{formik.errors.cardNumber}</div>
          ) : null}
        </div>
        <div>
          <label htmlFor="cardName">Cardholder Name:</label>
          <input
            type="text"
            id="cardName"
            name="cardName"
            value={formik.values.cardName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.cardName && formik.errors.cardName ? (
            <div className="error">{formik.errors.cardName}</div>
          ) : null}
        </div>
        <div>
          <label htmlFor="expirationDate">Expiration Date:</label>
          <input
            type="text"
            id="expirationDate"
            name="expirationDate"
            value={formik.values.expirationDate}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.expirationDate && formik.errors.expirationDate ? (
            <div className="error">{formik.errors.expirationDate}</div>
          ) : null}
        </div>
        <div>
          <label htmlFor="cvv">CVV:</label>
          <input
            type="text"
            id="cvv"
            name="cvv"
            value={formik.values.cvv}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.cvv && formik.errors.cvv ? (
            <div className="error">{formik.errors.cvv}</div>
          ) : null}
        </div>
           
  <button type="submit">Pay Now</button>

      </form>
      <PaymentSuccessDialog
        isOpen={isSuccessDialogOpen}
        onRequestClose={closeSuccessDialog}
      />
    </div>
  );
}
