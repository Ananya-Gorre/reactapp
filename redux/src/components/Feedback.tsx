import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const initialValues = {
  name: '',
  email: '',
  feedback: '',
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email format').required('Email is required'),
  feedback: Yup.string().required('Feedback is required'),
});

const FeedbackForm = () => {
  const handleSubmit = (values: typeof initialValues, { resetForm }: { resetForm: () => void }) => {
    alert(`Name: ${values.name}\nEmail: ${values.email}\nFeedback: ${values.feedback}`);
    resetForm();
  };

  return (
    <div>
      <h2>Feedback Form</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <label htmlFor="name">Name:</label>
            <Field type="text" id="name" name="name" required />
            <ErrorMessage name="name" component="div" className="error" />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <Field type="email" id="email" name="email" required />
            <ErrorMessage name="email" component="div" className="error" />
          </div>
          <div>
            <label htmlFor="feedback">Feedback:</label>
            <Field as="textarea" id="feedback" name="feedback" required />
            <ErrorMessage name="feedback" component="div" className="error" />
          </div>
          <div>
            <button type="submit">Submit Feedback</button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default FeedbackForm;
