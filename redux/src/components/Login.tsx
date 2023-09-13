import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import '../styles/Login.css';
import { Link } from 'react-router-dom';

interface LoginFormValues {
  email: string;
  password: string;
}

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

function LoginForm() {
  const initialValues: LoginFormValues = {
    email: '',
    password: '',
  };


  const navigate = useNavigate();

  const handleSubmit = async (values: LoginFormValues) => {
    try {

      await someAuthenticationFunction(values);

      navigate('/product');
    } catch (error) {
    }
  };

  const someAuthenticationFunction = async (values: LoginFormValues) => {
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 1000);
    });
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={LoginSchema}
      onSubmit={handleSubmit}
    >
      <div className="form-container">
        <Form>
          <div>
            <h3><b>LOGIN PAGE</b></h3>

            <label htmlFor="email">Email</label>
            <Field type="email" id="email" name="email" />
            <ErrorMessage name="email" component="div" className="error-message" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <Field type="password" id="password" name="password" />
            <ErrorMessage name="password" component="div" className="error-message" />
          </div>

          <button type="submit">Login</button>
        </Form>
        <Link to="/product">Go to Product Page</Link>
      </div>
    </Formik>
  );
}

export default LoginForm;




/*
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

function LoginForm() {
  const initialValues = {
    email: '',
    password: '',
  };

  return (
    <div>
      <h2>Login</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={LoginSchema}
        onSubmit={(values, { setSubmitting }) => {
          // Simulate form submission (replace with your authentication logic)
          setTimeout(() => {
            alert(`Submitted Values: ${JSON.stringify(values, null, 2)}`);
            setSubmitting(false); // Set submitting to false to enable the form fields
          }, 1000);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
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
              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default LoginForm;
*/