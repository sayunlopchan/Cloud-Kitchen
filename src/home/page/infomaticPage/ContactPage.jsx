import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const ContactPage = () => {
  // Initial values for the form fields
  const initialValues = {
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    message: '',
  };

  // Validation schema using Yup
  const validationSchema = Yup.object({
    firstname: Yup.string().required('First name is required'),
    lastname: Yup.string().required('Last name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    phone: Yup.string()
      .matches(/^[0-9]+$/, 'Phone number must be digits only')
      .required('Phone number is required'),
    message: Yup.string().required('Message is required'),
  });

  // Handle form submission
  const handleSubmit = (values, { resetForm }) => {
    console.log('Form submitted:', values);
    resetForm(); // Reset the form after submission
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 w-full gap-5 lg:gap-10 px-5 lg:px-10 place-content-center place-items-center lg:place-items-baseline bg-clay">
      {/* Info Section */}
      <section className='lg:col-span-5 p-5'>
        <h2 className="text-xl font-bold mb-4">BHANSHA EXPRESS</h2>
        <p><strong>Location:</strong> Butwal, Tilottama, Nepal</p>
        <p><strong>Phone:</strong> +9779867247262 | +9779806982238</p>
        <p><strong>Email:</strong> info@bhanshaexpress.com</p>
        <p><strong>Website:</strong> www.bhanshaexpress.com</p>

        <h3 className="text-lg font-semibold mt-4">Follow Us</h3>
        <p><strong>Facebook:</strong> @BhasnhaExpress</p>
        <p><strong>Instagram:</strong> @BhasnhaExpress</p>

        <h3 className="text-lg font-semibold mt-4">Operating Hours</h3>
        <p>Saturday to Sunday: 24/7</p>

        <p className="mt-4">For any inquiries, feel free to contact us via phone or email. We’re here to assist you with your orders and any questions you may have!</p>
      </section>

      {/* Form Section */}
      <section className='lg:col-span-7 p-5 bg-white rounded-lg w-full md:w-2/3 lg:w-[560px] lg:h-[600px] lg:my-10'>
        <h2 className="text-xl font-bold mb-4">Contact Us</h2>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              {/* First Name and Last Name */}
              <div className='flex justify-between gap-2'>
                <div className="mb-4 w-full">
                  <label htmlFor="firstname" className="block mb-1">First Name</label>
                  <Field
                    type="text"
                    id="firstname"
                    name="firstname"
                    className="w-full border-b border-gray-400 outline-none"
                  />
                  <ErrorMessage name="firstname" component="div" className="text-red-500 text-sm" />
                </div>
                <div className="mb-4 w-full">
                  <label htmlFor="lastname" className="block mb-1">Last Name</label>
                  <Field
                    type="text"
                    id="lastname"
                    name="lastname"
                    className="w-full border-b border-gray-400 outline-none"
                  />
                  <ErrorMessage name="lastname" component="div" className="text-red-500 text-sm" />
                </div>
              </div>

              {/* Email */}
              <div className="mb-4">
                <label htmlFor="email" className="block mb-1">Email</label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  className="w-full border-b border-gray-400 outline-none"
                />
                <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
              </div>

              {/* Phone */}
              <div className="mb-4">
                <label htmlFor="phone" className="block mb-1">Phone Number</label>
                <Field
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full border-b border-gray-400 outline-none"
                />
                <ErrorMessage name="phone" component="div" className="text-red-500 text-sm" />
              </div>

              {/* Message */}
              <div className="mb-4">
                <label htmlFor="message" className="block mb-1">Message</label>
                <Field
                  as="textarea"
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full p-2 border border-gray-400 outline-none"
                />
                <ErrorMessage name="message" component="div" className="text-red-500 text-sm" />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-colorRed text-white py-2 px-4 rounded hover:bg-red-600 transition duration-200"
              >
                Send Message
              </button>
            </Form>
          )}
        </Formik>
      </section>
    </div>
  );
};

export default ContactPage;
