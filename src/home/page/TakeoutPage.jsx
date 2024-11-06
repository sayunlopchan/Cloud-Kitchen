// components/TakeoutPage.js

import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import LeafletMap from '../../components/LeafletMap';
import Dialog from '../../components/Dialog/Dialog';
import { useState } from 'react';
import axios from 'axios';
import { orderUrl } from '../../apiPath/url';
import { clearCart } from '../../store/cartSlice';


import * as paths from '../../Routes/Path'

const TakeoutPage = () => {
  const cart = useSelector((state) => state.allCart.cart);
  const totalPrice = useSelector((state) => state.allCart.totalPrice);
  const userData = useSelector((state) => state.form.userData); // Get user data from Redux store
  const dispatch = useDispatch();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogMessage, setDialogMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [loading, setLoading] = useState(false);


  const handleTakeout = async () => {
    setLoading(true); // Set loading to true
    try {
      if (cart.length === 0) {
        setDialogMessage("Your cart is empty. Please add items to the cart before placing an order.");
        setIsSuccess(false);
        setDialogOpen(true); // Open the dialog for empty cart notification
        return; // Exit the function if the cart is empty
      }
      // Construct order data to send to the backend
      const orderData = {
        items: cart,
        totalPrice,
        user: userData,
        paymentMethod: 'Takeout', // Set payment method to "Takeout"
      };

      // Make an API request to create the order
      const response = await axios.post(orderUrl, orderData);

      // Handle successful response
      if (response.status === 201) {
        setDialogMessage(`Your Order Has Been Placed!, Please Wait For Our Call.`);
        setIsSuccess(true);
        dispatch(clearCart()); // Clear the cart in Redux store

      }
    } catch (error) {
      console.error('Error confirming takeout:', error.response || error); // Log detailed error
      setDialogMessage(error.response?.data?.message || 'Failed to confirm takeout. Please try again.');
      setIsSuccess(false);
    } finally {
      setLoading(false); // Set loading to false after the request is done
      setDialogOpen(true);
    }
  };

  const closeDialog = () => {
    setDialogOpen(false);
  };

  return (
    <div className="p-5 lg:px-20 bg-clay h-full">
      {/* Navigation */}
      <div className="flex items-center gap-2 pb-1 pl-5 text-lg lg:text-2xl font-semibold">
        <NavLink to={paths.CART_PAGE}>Cart</NavLink>
        &gt;
        <NavLink to={paths.TAKEOUT_FORM_PAGE}>Form</NavLink>
        &gt;
        <NavLink to={'#'} className="text-colorRed">
          Takeout Location
        </NavLink>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 px-3 p-2">
        {/* Title */}
        <h2 className="md:col-span-12 max-md:order-2 px-3 font-semibold text-lg">Takeout Location</h2>

        {/* Map Container */}
        <div className="md:col-span-7 max-md:order-3 flex justify-center rounded-lg overflow-hidden -z-0">
          <div className="h-[400px] w-full bg-gray-400">
            <LeafletMap />
          </div>
        </div>

        {/* Summary */}
        <div className="md:col-span-5 max-md:order-1 border rounded-lg bg-white">
          <h2 className="text-xl lg:text-3xl text-center m-2 font-semibold">Order Summary</h2>

          {/* Loop through cart items */}
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

          {/* Total Price */}
          <div className="flex justify-between px-5 py-3 border-t-2">
            <h2 className="font-semibold">Total Price:</h2>
            <p>Rs. {totalPrice}</p>
          </div>

          <p className="text-center text-secondaryText">
            <span className="text-colorRed">*</span>
            Please wait for phone call confirmation after order
            <span className="text-colorRed">*</span>
          </p>

          {/* Button */}
          <div className="w-full flex justify-center pb-2">
            <button
              onClick={handleTakeout}
              className="bg-black text-white px-16 py-2 rounded-lg hover:bg-[#151515] transition-colors duration-300"
              disabled={loading} // Disable button while loading
            >
              {loading ? 'Confirming...' : 'Confirm Takeout'}
            </button>
          </div>
        </div>
      </div>

      {/* Dialog for notifications */}
      <div className="z-[10000]">
        <Dialog isOpen={dialogOpen} onClose={closeDialog} message={dialogMessage} isSuccess={isSuccess} />
      </div>
    </div>
  );
};

export default TakeoutPage;
