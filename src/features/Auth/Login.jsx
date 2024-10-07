import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext'; // Import the useAuth hook
import { loginUrl } from '../../apiPath/url';
import logo from '../../assets/logo/Bhansha-Express-Logo-Only.svg';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email format')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
  });

  const handleLogin = async (values, { setSubmitting }) => {
    try {
      setLoginError('');

      const response = await axios.post(loginUrl, values);

      if (response.data.token) {
        const userData = response.data.user;
        login(userData);
        navigate(userData.isAdmin ? '/dashboard' : '/');
      } else {
        setLoginError(response.data.message || 'Invalid credentials');
      }
    } catch (error) {
      if (error.response) {
        setLoginError(error.response.data.message || 'An error occurred during login. Please try again.');
      } else {
        setLoginError('Network error. Please try again later.');
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="w-full flex flex-col justify-center items-center h-screen">
      <img src={logo} alt="Bhansha Express logo" className='size-20' />
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={handleLogin}
      >
        {({ isSubmitting }) => (
          <Form className="bg-white p-6 rounded-lg shadow-md w-80">
            <h2 className="text-xl font-bold mb-4">Login</h2>
            {loginError && <p className="text-red-500 mb-2">{loginError}</p>}
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2">Email:</label>
              <Field
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
              <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block mb-2">Password:</label>
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
                  onClick={() => setShowPassword(prev => !prev)}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600"
                >
                  {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                </button>
              </div>
              <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full p-2 text-white rounded-lg ${isSubmitting ? 'bg-gray-500' : 'bg-colorRed hover:bg-red-600'}`}
            >
              {isSubmitting ? 'Logging in...' : 'Login'}
            </button>
            {/* <div>
              <span className='text-sm mr-1 '> don&apos;t have an account?</span>
              <NavLink to={'/signup'} className={'underline underline-offset-1'}>signup</NavLink>
            </div> */}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
