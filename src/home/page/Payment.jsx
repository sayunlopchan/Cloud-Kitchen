// Payment.js
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { orderUrl } from '../../apiPath/url'; // Adjust the path accordingly

const Payment = () => {
  const cart = useSelector((state) => state.allCart.cart);
  const totalPrice = useSelector((state) => state.allCart.totalPrice);
  const userData = useSelector((state) => state.form.userData); // Get user data from Redux store

  const handleOrder = async () => {
    if (cart.length === 0) {
      alert("Your cart is empty. Please add items to the cart before placing an order.");
      return;
    }

    const orderData = {
      items: cart,
      totalPrice: totalPrice,
      user: userData, // Include user data
    };

    try {
      const response = await axios.post(orderUrl, orderData);
      console.log('Order successful:', response.data);
      // Optionally, redirect or update the UI
    } catch (error) {
      console.error('Error placing order:', error);
      // Handle error (e.g., show error message)
    }
  };

  return (
    <div className="p-10 lg:py-5 lg:px-20 bg-clay h-full">
      {/* Navigation */}
      <div className="flex items-center gap-2 pb-1 pl-5 text-2xl font-semibold">
        <NavLink to={'/cart'}>CART</NavLink>
        &gt;
        <NavLink to={'/fill-my-form'}>Form</NavLink>
        &gt;
        <NavLink to={'#'} className={'text-colorRed'}>
          Payment
        </NavLink>
      </div>
      {/* Navigation */}

      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 px-3 p-2">
        {/* Table Container */}
        <div className="md:col-span-7 flex justify-center rounded-lg overflow-hidden">
          <table className="min-w-full bg-white border border-gray-300">
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
        <div className="md:col-span-5 border rounded-lg bg-white">
          <h2 className="text-xl lg:text-3xl text-center m-2 font-semibold">
            Choose Payment
          </h2>
          <div className="grid grid-cols-2 place-items-center gap-5 px-5 py-3 border-t-2">
            {/* Payment method icons or buttons can be placed here */}
            <div className='w-20 h-10 lg:w-40 lg:h-20 bg-secendaryText'></div>
            <div className='w-20 h-10 lg:w-40 lg:h-20 bg-secendaryText'></div>
            <div className='w-20 h-10 lg:w-40 lg:h-20 bg-secendaryText'></div>
            <div className='w-20 h-10 lg:w-40 lg:h-20 bg-secendaryText'></div>
          </div>
          <div className="w-full flex justify-center pb-2">
            <button
              onClick={handleOrder}
              className="bg-black text-white px-28 py-2 rounded-lg hover:bg-[#151515] transition-colors duration-300"
            >
              Order
            </button>
          </div>
        </div>
        {/* Summary */}
      </div>
    </div>
  );
};

export default Payment;
