import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { setUserData } from '../../store/formSlice';

import * as paths from '../../Routes/Path'




const FillMyFormTO = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const cart = useSelector((state) => state.allCart.cart);
  const totalPrice = useSelector((state) => state.allCart.totalPrice);

  const getInitialValues = () => {
    const storedData = localStorage.getItem('formData');
    return storedData ? JSON.parse(storedData) : {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      location: '',
    };
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required('First name is required.'),
    lastName: Yup.string().required('Last name is required.'),
    email: Yup.string().email('Invalid email format').required('Email is required.'),
    phoneNumber: Yup.string()
      .length(10, 'Phone number must be exactly 10 digits.')
      .required('Phone number is required.'),
    location: Yup.string().required('Location is required.'),
  });

  return (
    <div className="p-5 lg:py-5 lg:px-20 bg-clay h-full">
      {/* Navigation */}
      <div className="flex items-center gap-2 pb-1 pl-5 text-lg lg:text-2xl font-semibold">
        <NavLink to={paths.CART_PAGE}>Cart</NavLink>
        &gt;
        <NavLink to={'#'} className={'text-colorRed'}>
          Form
        </NavLink>
        &gt;
        <NavLink to={'#'}>
          Takeout
        </NavLink>
      </div>
      {/* Navigation */}

      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 px-3 p-2">
        {/* Form Container */}
        <div className="md:col-span-7 flex justify-center rounded-lg overflow-hidden">
          <Formik
            initialValues={getInitialValues()} // Get initial values from local storage
            validationSchema={validationSchema}
            onSubmit={(values) => {
              dispatch(setUserData(values)); // Save form data to the store
              localStorage.setItem('formData', JSON.stringify(values)); // Save form data to local storage
              nav(paths.TAKEOUT_PAGE, { state: { formData: values } }); // Navigate with form data
            }}
          >
            {() => (
              <Form className="space-y-4 max-w-lg mx-auto p-4 border rounded-lg shadow-md bg-white">
                <h2 className="text-xl font-semibold text-gray-900">User Information</h2>
                <div className='flex justify-between gap-5'>
                  {/* First Name */}
                  <div>
                    <label className="block text-gray-700" htmlFor="firstName">First Name</label>
                    <Field
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="w-full border border-gray-300 rounded-md p-2"
                    />
                    <ErrorMessage name="firstName" component="p" className="text-red-500 text-sm" />
                  </div>
                  {/* Last Name */}
                  <div>
                    <label className="block text-gray-700" htmlFor="lastName">Last Name</label>
                    <Field
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="w-full border border-gray-300 rounded-md p-2"
                    />
                    <ErrorMessage name="lastName" component="p" className="text-red-500 text-sm" />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700" htmlFor="email">Email</label>
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    className="w-full border border-gray-300 rounded-md p-2"
                  />
                  <ErrorMessage name="email" component="p" className="text-red-500 text-sm" />
                </div>

                <div>
                  <label className="block text-gray-700" htmlFor="phoneNumber">Phone Number</label>
                  <Field
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    className="w-full border border-gray-300 rounded-md p-2"
                  />
                  <ErrorMessage name="phoneNumber" component="p" className="text-red-500 text-sm" />
                </div>

                <div>
                  <label className="block text-gray-700" htmlFor="location">Location</label>
                  <Field
                    type="text"
                    id="location"
                    name="location"
                    className="w-full border border-gray-300 rounded-md p-2"
                  />
                  <ErrorMessage name="location" component="p" className="text-red-500 text-sm" />
                </div>

                <button
                  type="submit"
                  disabled={cart.length === 0} // Disable button if cart is empty
                  className={`bg-black text-white w-full py-2 rounded-lg hover:bg-[#151515] transition-colors duration-300 ${cart.length === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  Submit
                </button>
              </Form>
            )}
          </Formik>
        </div>
        {/* Form Container */}

        {/* Summary */}
        <div className="md:col-span-5 border rounded-lg bg-white">
          <h2 className="text-xl lg:text-3xl text-center m-2 font-semibold">Order Summary</h2>

          <div className="p-5 h-[250px] overflow-y-scroll">
            {cart.length === 0 ? (
              <p>Your cart is empty</p>
            ) : (
              cart.map((item) => (
                <div key={item.id} className="flex gap-4 mb-5">
                  <div className="w-20 h-20 bg-gray-400 rounded-lg overflow-hidden">
                    <img src={item.img} alt={item.title} className="object-cover w-full h-full" />
                  </div>
                  <div>
                    <h2 className="font-semibold">{item.title}</h2>
                    <p className="text-sm">Rs. {item.price}</p>
                    <p className="text-sm">Quantity: {item.quantity}</p>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="flex justify-between px-5 py-3 border-t-2">
            <h2 className="font-semibold">Total Price:</h2>
            <p>Rs. {totalPrice}</p>
          </div>

          <div className='w-full px-5 py-1 text-sm'>
            <p className='text-center text-secendaryText'>
              <span className='text-colorRed'>*</span>
              please wait for phone call confirmation after order
              <span className='text-colorRed'>*</span>
            </p>
          </div>
        </div>
        {/* Summary */}
      </div>
    </div>
  );
};

export default FillMyFormTO;
