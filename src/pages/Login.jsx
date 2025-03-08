import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import config from '../config';

const Login = () => {
  const handleSubmit = async (values, { setSubmitting, setErrors }) => {
    try {
      const response = await axios.post(`${config.backendUrl}/User/login`, values);
      sessionStorage.setItem('token', response.data.token);
      // Redirect to home page or dashboard
    } catch (error) {
      setErrors({ server: error.response.data.message });
    }
    setSubmitting(false);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <Formik
        initialValues={{ username: '', password: '' }}
        validationSchema={Yup.object({
          username: Yup.string().required('Required'),
          password: Yup.string().required('Required'),
        })}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, errors }) => (
          <Form className="bg-white p-6 rounded shadow-md">
            <h2 className="text-2xl mb-4">Login</h2>
            <div>
              <label htmlFor="username">Username</label>
              <Field name="username" type="text" className="block w-full p-2 border rounded mt-1" />
              <ErrorMessage name="username" component="div" className="text-red-500 text-sm" />
            </div>
            <div className="mt-4">
              <label htmlFor="password">Password</label>
              <Field name="password" type="password" className="block w-full p-2 border rounded mt-1" />
              <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
            </div>
            {errors.server && <div className="text-red-500 text-sm mt-2">{errors.server}</div>}
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded mt-4" disabled={isSubmitting}>
              {isSubmitting ? 'Logging in...' : 'Login'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;