import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { signupUrl } from '../../apiPath/url.js';
import { NavLink, useNavigate } from 'react-router-dom';
import { LOGIN_PAGE } from '../../Routes/Path.js';




const Signup = () => {

  const nav = useNavigate()


  const [showPassword, setShowPassword] = useState(false);
  const [signupError, setSignupError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Validation schema using Yup
  const validationSchema = Yup.object({
    username: Yup.string()
      .min(3, 'Username must be at least 3 characters')
      .required('Username is required'),
    email: Yup.string()
      .email('Invalid email format')
      .required('Email is required'),
    password: Yup.string()
      .min(5, 'Password must be at least 5 characters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required'),
  });

  // Handle signup
  const handleSignup = async (values, { setSubmitting }) => {
    try {
      setSignupError('');
      setSuccessMessage('');

      const response = await axios.post(signupUrl, values);
      setSuccessMessage('Signup successful! Please log in.');
    } catch (error) {
      setSignupError('An error occurred during signup. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="w-full h-full flex justify-center items-center">
      <Formik
        initialValues={{ username: '', email: '', password: '', confirmPassword: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSignup}
      >
        {({ isSubmitting }) => (
          <Form className="bg-white p-6 rounded-lg shadow-md w-full max-w-md h-screen">
            <h2 className="text-xl font-bold mb-4">Signup</h2>

            {/* Display server-side error or success message */}
            {signupError && <p className="text-red-500 mb-2">{signupError}</p>}
            {successMessage && <p className="text-green-500 mb-2">{successMessage}</p>}

            {/* Username field */}
            <div className="mb-4">
              <label htmlFor="username" className="block mb-2">
                Username:
              </label>
              <Field
                type="text"
                name="username"
                id="username"
                placeholder="Enter your username"
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
              <ErrorMessage
                name="username"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {/* Email field */}
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2">
                Email:
              </label>
              <Field
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {/* Password field */}
            <div className="mb-4">
              <label htmlFor="password" className="block mb-2">
                Password:
              </label>
              <div className="relative">
                <Field
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  id="password"
                  placeholder="Enter your password"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(prev => !prev)} // Toggle password visibility
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600"
                >
                  {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                </button>
              </div>
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {/* Confirm Password field */}
            <div className="mb-4">
              <label htmlFor="confirmPassword" className="block mb-2">
                Confirm Password:
              </label>
              <Field
                type={showPassword ? 'text' : 'password'}
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Confirm your password"
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
              <ErrorMessage
                name="confirmPassword"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {/* Submit button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-blue-500 text-white font-semibold p-2 rounded-lg hover:bg-blue-600 transition ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
            >
              {isSubmitting ? 'Signing up...' : 'Signup'}
            </button>
            <div className='mt-2'>
              <span
                className='text-sm mr-1 '> already have an account?
              </span>
              <NavLink to={LOGIN_PAGE} className={'underline underline-offset-1'}>login</NavLink>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Signup;
