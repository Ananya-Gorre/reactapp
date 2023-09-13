import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Register.css';
import axios from 'axios';

interface RegistrationFormValues {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const RegistrationSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), undefined], 'Passwords must match')
    .required('Confirm Password is required'),
});

const registerUser = async (userData: RegistrationFormValues) => {  try {
    const response = await axios.post('/api/register', userData); // Use the correct API endpoint
    console.log(response.data); // Handle the response as needed
  } catch (error:any) {
    console.error(error.response?.data); // Handle errors
  }};

function RegistrationForm() {
  const initialValues: RegistrationFormValues = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const [formSubmitted, setFormSubmitted] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = (values: RegistrationFormValues) => {
  console.log('Registration Form Values:', values);

  setTimeout(() => {
      setFormSubmitted(true);
      navigate('/login');
    }, 1000);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={RegistrationSchema}
      onSubmit={handleSubmit}
    >
      <div className="form-container">
        <Form>
          <div>
            <h3><b>REGISTRATION PAGE</b></h3>
            <label htmlFor="username">Username</label>
            <Field type="text" id="username" name="username" />
            <ErrorMessage name="username" component="div" className="error-message" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <Field type="email" id="email" name="email" />
            <ErrorMessage name="email" component="div" className="error-message" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <Field type="password" id="password" name="password" />
            <ErrorMessage name="password" component="div" className="error-message" />
          </div>
          <div>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <Field type="password" id="confirmPassword" name="confirmPassword" />
            <ErrorMessage name="confirmPassword" component="div" className="error-message" />
          </div>
          <button type="submit">Register</button>
          {formSubmitted && (
            <div className="success-message">Registration successful! You can now <Link to="/login">login</Link>.</div>
          )}
        </Form>
      </div>
    </Formik>
  );
}

export default RegistrationForm;
