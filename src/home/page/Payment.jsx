// components/Payment.js

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { orderUrl } from '../../apiPath/url'; // Adjust the path accordingly
import { clearCart } from '../../features/cartSlice';
import cod from '../../assets/icon/COD_icon.png';
import esewa from '../../assets/icon/esewa_og.webp';
import Dialog from '../../components/Dialog'; // Import the Dialog component

const Payment = () => {
  const cart = useSelector((state) => state.allCart.cart);
  const totalPrice = useSelector((state) => state.allCart.totalPrice);
  const userData = useSelector((state) => state.form.userData); // Get user data from Redux store
  const dispatch = useDispatch(); // Initialize useDispatch

  // State variables for Dialog
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogMessage, setDialogMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [loading, setLoading] = useState(false); // Loading state
  const [paymentMethod, setPaymentMethod] = useState('Cash on Delivery'); // State for payment method

  const handleOrder = async () => {
    // Check if the cart is empty
    if (cart.length === 0) {
      alert("Your cart is empty. Please add items to the cart before placing an order.");
      return; // Exit the function if the cart is empty
    }

    // Prepare order data to send to the backend
    const orderData = {
      items: cart,
      totalPrice: totalPrice,
      user: userData,
      paymentMethod: paymentMethod, // Include selected payment method
      takeoutLocation: paymentMethod === 'Takeout' ? userData.location : null // Include location only if 'Takeout'
    };

    setLoading(true); // Set loading to true

    try {
      // Send order data to the server
      const response = await axios.post(orderUrl, orderData);
      console.log('Order successful:', response.data);

      // Dispatch clearCart action to reset the cart in Redux store
      dispatch(clearCart());

      // Set success dialog message
      setDialogMessage('Order successfully placed!');
      setIsSuccess(true);
    } catch (error) {
      console.error('Error placing order:', error.response || error);
      // Set error dialog message
      setDialogMessage(error.response?.data?.message || 'Failed to place order. Please try again.');
      setIsSuccess(false);
    } finally {
      setLoading(false); // Set loading to false after the request is done
      setDialogOpen(true); // Open the dialog
    }
  };

  const closeDialog = () => {
    setDialogOpen(false);
  };

  return (
    <div className="p-10 lg:py-5 lg:px-20 bg-clay h-full">
      {/* Navigation */}
      <div className="flex items-center gap-2 pb-1 pl-5 text-2xl font-semibold">
        <NavLink to={'/cart'}>CART</NavLink>
        &gt;
        <NavLink to={'/fill-my-form-payment'}>Form</NavLink>
        &gt;
        <NavLink to={'#'} className={'text-colorRed'}>
          Payment
        </NavLink>
      </div>

      {/* Dialog for notifications */}
      <div className="z-[10000]">
        <Dialog
          isOpen={dialogOpen}
          onClose={closeDialog}
          message={dialogMessage}
          isSuccess={isSuccess}
        />
      </div>

      <div className="max-sm:text-sm lg:h-[400px]   grid grid-cols-1 md:grid-cols-12 gap-5 px-3 p-2">
        {/* Table Container */}
        <div className="md:col-span-7 flex justify-center rounded-lg overflow-scroll">
          <table className="min-w-full bg-white border border-gray-300 ">
            <thead>
              <tr className="bg-gray-200">
                <th className="py-2 px-4 border-b text-left">Item Name</th>
                <th className="py-2 px-4 border-b text-left">Price</th>
                <th className="py-2 px-4 border-b text-left">Quantity</th>
                <th className="py-2 px-4 border-b text-left">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {cart.length === 0 ? (
                <tr>
                  <td colSpan="4" className="text-center py-4">Your cart is empty</td>
                </tr>
              ) : (
                cart.map((item) => (
                  <tr key={item.id}>
                    <td className="py-2 px-4 border-b">{item.title}</td>
                    <td className="py-2 px-4 border-b">Rs. {item.price}</td>
                    <td className="py-2 px-4 border-b">{item.quantity}</td>
                    <td className="py-2 px-4 border-b">Rs. {item.price * item.quantity}</td>
                  </tr>
                ))
              )}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="3" className="py-2 px-4 text-right font-semibold">Total Price:</td>
                <td className="py-2 px-4 font-semibold">Rs. {totalPrice}</td>
              </tr>
            </tfoot>
          </table>
        </div>

        {/* Summary */}
        <div className="md:col-span-5 border rounded-lg bg-white relative">
          <h2 className="text-xl lg:text-3xl text-center m-2 font-semibold">Choose Payment</h2>
          <div className="grid grid-cols-2 place-items-center gap-5 px-5 py-3 border-t-2">
            {/* Cash on Delivery Option */}
            <div
              className={`w-20 h-10 lg:w-40 lg:h-20 bg-white overflow-hidden border-2 flex justify-center items-center cursor-pointer ${paymentMethod === 'Cash on Delivery' ? 'border-blue-500' : ''}`}
              onClick={() => setPaymentMethod('Cash on Delivery')}
            >
              <img src={cod} alt="Cash on Delivery" className="object-cover w-[60%]" />
            </div>

            {/* Takeout Option */}
            <div className="relative">
              <div
                className={`w-20 h-10 lg:w-40 lg:h-20 bg-slate-300 border-2 overflow-hidden cursor-pointer ${paymentMethod === 'Takeout' ? 'border-blue-500' : ''}`}
                onClick={() => setPaymentMethod('Takeout')}
              >
                <img src={esewa} alt="Takeout" className="object-cover w-full h-full" />
              </div>
              {/* Overlay for esewa */}
              <div className="absolute inset-0 bg-black opacity-60 flex justify-center items-center">
                <span className="text-white font-bold text-sm text-center lg:text-lg">Coming Soon</span>
              </div>
            </div>
          </div>

          {/* Order Button */}
          <div className="w-full flex justify-center pb-2">
            <button
              onClick={handleOrder}
              className="bg-black text-white px-28 py-2 rounded-lg hover:bg-[#151515] transition-colors duration-300"
              disabled={loading} // Disable button while loading
            >
              {loading ? 'Processing...' : 'Order'}
            </button>
          </div>
        </div>
        {/* Summary */}
      </div>
    </div>
  );
};

export default Payment;
