import { useEffect, useState } from 'react';
import axios from 'axios';
import { orderUrl } from '../../apiPath/url';

const Dashboard = () => {
  const [orders, setOrders] = useState([]);
  const [notification, setNotification] = useState('');
  const [previousOrderCount, setPreviousOrderCount] = useState(0);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [orderToDelete, setOrderToDelete] = useState(null);
  const [selectedOrderUserInfo, setSelectedOrderUserInfo] = useState(null);
  const [statusEditOrder, setStatusEditOrder] = useState(null);
  const [newStatus, setNewStatus] = useState('');
  const [selectedItem, setSelectedItem] = useState(null); // New state for selected item

  // Fetch orders from the backend
  const fetchOrders = async () => {
    try {
      const response = await axios.get(orderUrl);
      setOrders(response.data);
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };

  // Effect to fetch orders on mount
  useEffect(() => {
    fetchOrders();
  }, []);

  // Set an interval to fetch new orders every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      fetchOrders();
    }, 10000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  // Handle notifications for new orders
  useEffect(() => {
    if (orders.length > previousOrderCount) {
      const newOrdersCount = orders.length - previousOrderCount;
      setNotification(`Fetched ${newOrdersCount} new order${newOrdersCount > 1 ? 's' : ''}.`);
      setPreviousOrderCount(orders.length); // Update previous order count
      setTimeout(() => setNotification(''), 3000); // Clear notification after 3 seconds
    }
  }, [orders, previousOrderCount]);

  // Handle removing an order
  const handleRemoveOrder = async () => {
    try {
      await axios.delete(`${orderUrl}/${orderToDelete}`);
      setNotification('Order removed successfully.');
      fetchOrders(); // Refresh orders
      setConfirmDelete(false); // Close the confirmation dialog
      setOrderToDelete(null); // Clear the order to delete

      // Clear notification after 5 seconds
      setTimeout(() => {
        setNotification('');
      }, 5000);
    } catch (error) {
      console.error('Error removing order:', error);
      setNotification('Error removing order.');
    }
  };

  // Handle status edit button click
  const handleStatusEdit = (order) => {
    setStatusEditOrder(order); // Set the order data for status editing
    setNewStatus(order.status || ''); // Initialize with current status
  };

  // Submit the updated status
  const submitStatusUpdate = async (e) => {
    e.preventDefault();
    if (!newStatus) {
      setNotification('Please select a status.');
      setTimeout(() => setNotification(''), 3000);
      return;
    }

    try {
      await axios.put(`${orderUrl}/${statusEditOrder._id}`, { status: newStatus });
      setNotification('Order status updated successfully.');
      setStatusEditOrder(null); // Close the status edit modal
      fetchOrders(); // Refresh orders
    } catch (error) {
      console.error('Error updating order status:', error);
      setNotification('Error updating order status.');
    } finally {
      setTimeout(() => setNotification(''), 5000);
    }
  };

  // Function to format the order ID
  const formatOrderId = (index) => {
    if (index < 1000000) {
      return `BE${(index + 1).toString().padStart(6, '0')}`;
    } else if (index < 1000000 + 26) {
      return `BE${(index - 1000000).toString().padStart(5, '0')}a1`;
    } else if (index < 1000000 + 26 + 99999) {
      const letterIndex = Math.floor((index - (1000000 + 27)) / 99999);
      const numberPart = (index - (1000000 + 27)) % 99999;
      const letter = String.fromCharCode(97 + letterIndex);
      return `BE${letter}${(numberPart + 1).toString().padStart(5, '0')}`;
    } else if (index < 1000000 + 26 + 99999 + 26) {
      return `BE${(index - (1000000 + 27 + 99999)).toString().padStart(6, '0')}A1`;
    } else {
      const letterIndex = Math.floor((index - (1000000 + 27 + 99999 + 1)) / 99999);
      const numberPart = (index - (1000000 + 27 + 99999 + 1)) % 99999;
      const letter = String.fromCharCode(65 + letterIndex);
      return `BE${letter}${(numberPart + 1).toString().padStart(5, '0')}`;
    }
  };

  // Function to get background color based on order status
  const getStatusBgColor = (status) => {
    switch (status) {
      case 'Cooking':
        return 'bg-gray-300';
      case 'On Delivery':
        return 'bg-orange-300';
      case 'Delivery Complete':
        return 'bg-green-300';
      case 'Order Cancel':
        return 'bg-red-300';
      default:
        return 'bg-white';
    }
  };

  // Handle item quantity click
  const handleQuantityClick = (items) => {
    setSelectedItem(items); // Set selected items to show in the modal
  };

  return (
    <div className="p-10">
      <h2 className="text-2xl font-bold mb-4">Order Summary</h2>

      {/* Notification */}
      {notification && (
        <div
          className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4 fixed bottom-20 right-0"
          role="alert"
        >
          <span className="block sm:inline">{notification}</span>
        </div>
      )}

      <div className="overflow-x-auto">
        <table className="w-full table-auto border border-gray-300">
          <thead className="max-md:text-sm">
            <tr className="bg-gray-100 text-left">
              <th className="py-2 px-4 border">Order ID</th>
              <th className="py-2 px-4 border">Order Items</th>
              <th className="py-2 px-4 border">Quantity</th>
              <th className="py-2 px-4 border">Amount</th>
              <th className="py-2 px-4 border">Coupon Discount</th>
              <th className="py-2 px-4 border">Delivery Charge</th>
              <th className="py-2 px-4 border">Payment Type</th>
              <th className="py-2 px-4 border">Status</th>
              <th className="py-2 px-4 border">Actions</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {orders.map((order, index) => (
              <tr key={order._id}>
                <td
                  className="py-2 px-4 border cursor-pointer text-blue-500 underline"
                  onClick={() => setSelectedOrderUserInfo(order.user)}
                >
                  {formatOrderId(index)} {/* Updated to pass the index */}
                </td>
                <td className="py-2 px-4 border lg:w-[160px]">
                  {order.items.map((item) => item.title).join(', ')}
                </td>
                <td
                  className="py-2 px-4 border cursor-pointer text-blue-500 underline"
                  onClick={() => handleQuantityClick(order.items)} // Trigger item modal on click
                >
                  {order.items.reduce((total, item) => total + item.quantity, 0)}
                </td>
                <td className="py-2 px-4 border">Rs.{order.totalPrice}</td>
                <td className="py-2 px-4 border">{order.discount || '0%'}</td>
                <td className="py-2 px-4 border">Rs.{order.deliveryCharge || '0'}</td>
                <td className="py-2 px-4 border">{order.paymentMethod}</td>
                <td className={`py-2 px-4 border ${getStatusBgColor(order.status)}`}>
                  {order.status}
                </td>
                <td className="py-2 px-4 border">
                  <button
                    className="text-blue-500 hover:underline"
                    onClick={() => handleStatusEdit(order)}
                  >
                    Edit Status
                  </button>
                  <button
                    className="text-red-500 hover:underline ml-2"
                    onClick={() => {
                      setOrderToDelete(order._id);
                      setConfirmDelete(true);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Confirmation dialog for order deletion */}
      {confirmDelete && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded p-5 shadow-md">
            <h3 className="text-lg font-bold mb-4">Confirm Deletion</h3>
            <p>Are you sure you want to delete this order?</p>
            <div className="flex justify-end mt-4">
              <button className="bg-red-500 text-white py-1 px-3 rounded mr-2" onClick={handleRemoveOrder}>
                Delete
              </button>
              <button className="bg-gray-300 py-1 px-3 rounded" onClick={() => setConfirmDelete(false)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal to display selected item details */}
      {selectedItem && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-70 z-50 transition-opacity duration-300 ease-in-out ">
          <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-1/3 lg:w-1/4 p-6 animate-fadeIn ">
            <h3 className="text-xl font-bold mb-4 border-b pb-2 border-gray-200 text-center bg-gray-100 rounded">
              Food Detail
            </h3>
            <ul className="list-disc list-inside mb-4 h-[400px] overflow-scroll">
              {selectedItem.map((item, index) => (
                <li key={index} className="py-1 text-gray-700 border-b-2">
                  <li>{item.title}</li>
                  <li>(Quantity: {item.quantity})</li>
                </li>
              ))}
            </ul>
            <div className="flex justify-end mt-4">
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
                onClick={() => setSelectedItem(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}


      {/* Modal for editing status */}
      {statusEditOrder && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded p-5 shadow-md">
            <h3 className="text-lg font-bold mb-4">Edit Order Status</h3>
            <form onSubmit={submitStatusUpdate}>
              <select
                value={newStatus}
                onChange={(e) => setNewStatus(e.target.value)}
                className="border border-gray-300 rounded p-2 mb-4 w-full"
              >
                <option value="">Select status</option>
                <option value="Cooking">Cooking</option>
                <option value="On Delivery">On Delivery</option>
                <option value="Delivery Complete">Delivery Complete</option>
                <option value="Order Cancel">Order Cancel</option>
              </select>
              <div className="flex justify-end">
                <button type="submit" className="bg-blue-500 text-white py-1 px-3 rounded mr-2">
                  Update
                </button>
                <button
                  type="button"
                  className="bg-gray-300 py-1 px-3 rounded"
                  onClick={() => setStatusEditOrder(null)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* User Info Modal */}
      {selectedOrderUserInfo && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-5 rounded">
            <h3 className="text-xl font-bold mb-4">User Info</h3>
            <p><strong>Name:</strong> {selectedOrderUserInfo.firstName + " " + selectedOrderUserInfo.lastName}</p>
            <p><strong>Email:</strong> {selectedOrderUserInfo.email}</p>
            <p><strong>Phone:</strong> {selectedOrderUserInfo.phoneNumber}</p>
            <p><strong>Location:</strong> {selectedOrderUserInfo.location}</p>

            {/* Format the date and time */}
            {selectedOrderUserInfo.sentDate && (
              <p>
                <strong>Date:</strong> {new Date(selectedOrderUserInfo.sentDate).toLocaleDateString('en-CA')} {/* Format as YYYY-MM-DD */}
              </p>
            )}
            {selectedOrderUserInfo.sentDate && (
              <p>
                <strong>Time:</strong> {new Date(selectedOrderUserInfo.sentDate).toLocaleTimeString()} {/* Format as local time */}
              </p>
            )}

            <button
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
              onClick={() => setSelectedOrderUserInfo(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
