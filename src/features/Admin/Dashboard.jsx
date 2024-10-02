import { useEffect, useState } from 'react';
import axios from 'axios';
import { orderUrl } from '../../apiPath/url';

const Dashboard = () => {
  const [orders, setOrders] = useState([]);
  const [notification, setNotification] = useState('');
  const [editOrderData, setEditOrderData] = useState(null);
  const [previousOrderCount, setPreviousOrderCount] = useState(0);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [orderToDelete, setOrderToDelete] = useState(null);

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

  // Simulate receiving new order data
  useEffect(() => {
    const interval = setInterval(() => {
      fetchOrders();
    }, 10000); // Fetch new data every 10 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  // Effect to handle new order notifications
  useEffect(() => {
    if (orders.length > previousOrderCount) {
      const newOrdersCount = orders.length - previousOrderCount;
      setNotification(`Fetched ${newOrdersCount} order${newOrdersCount > 1 ? 's' : ''}.`);
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

  // Handle editing an order
  const handleEditOrder = (order) => {
    setEditOrderData(order); // Set order data to edit
  };

  // Submit edited order
  const submitEditOrder = async (editedOrder) => {
    try {
      await axios.put(`${orderUrl}/${editedOrder._id}`, editedOrder);
      setNotification('Order updated successfully.');
      setEditOrderData(null); // Clear edit data
      fetchOrders(); // Refresh orders
    } catch (error) {
      console.error('Error updating order:', error);
      setNotification('Error updating order.');
    }
  };

  // Function to format the order ID
  const formatOrderId = (id) => {
    const lastTwoChars = id.slice(-2);
    return `BE00000${lastTwoChars}`;
  };

  return (
    <div className="p-10 ">
      <h2 className="text-2xl font-bold mb-4">Order Summary</h2>

      {/* Notification */}
      {notification && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4 fixed bottom-20 right-0" role="alert">
          <span className="block sm:inline">{notification}</span>
        </div>
      )}

      <div className="overflow-x-auto">
        <table className="w-full table-auto border border-gray-300 ">
          <thead className='max-md:text-sm '>
            <tr className="bg-gray-100 text-left">
              <th className="py-2 px-4 border">Order ID</th>
              <th className="py-2 px-4 border">Order Items</th>
              <th className="py-2 px-4 border">Quantity</th>
              <th className="py-2 px-4 border">Amount</th>
              <th className="py-2 px-4 border">Coupon Discount</th>
              <th className="py-2 px-4 border">Delivery Charge</th>
              <th className="py-2 px-4 border">Total</th>
              <th className="py-2 px-4 border">Actions</th>
            </tr>
          </thead>
          <tbody className='text-sm '>
            {orders.map((order) => (
              <tr key={order._id}>
                <td className="py-2 px-4 border">{formatOrderId(order._id)}</td>
                <td className="py-2 px-4 border lg:w-[160px]">{order.items.map(item => item.title).join(', ')}</td>
                <td className="py-2 px-4 border">{order.items.reduce((total, item) => total + item.quantity, 0)}</td>
                <td className="py-2 px-4 border">Rs.{order.totalPrice}</td>
                <td className="py-2 px-4 border">{order.discount || '0%'}</td>
                <td className="py-2 px-4 border">Rs.{order.deliveryCharge || '0'}</td>
                <td className="py-2 px-4 border">Rs.{order.totalPrice - (order.discount ? (order.totalPrice * parseFloat(order.discount) / 100) : 0) + (order.deliveryCharge || 0)}</td>
                <td className="py-2 px-4 border flex flex-wrap justify-center gap-1">
                  <button onClick={() => handleEditOrder(order)} className="bg-blue-500 text-white px-2 py-1 rounded">Edit</button>
                  <button
                    onClick={() => {
                      setOrderToDelete(order._id);
                      setConfirmDelete(true);
                    }}
                    className="bg-red-500 text-white px-2 py-1 rounded ml-2">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* User Information Table */}
      <h2 className="text-2xl font-bold mt-10 mb-4">User Information</h2>
      <div className="overflow-x-auto">
        <table className="w-full table-auto border border-gray-300 ">
          <thead className='max-md:text-sm '>
            <tr className="bg-gray-100 text-left">
              <th className="py-2 px-4 border">Order ID</th>
              <th className="py-2 px-4 border">User Name</th>
              <th className="py-2 px-4 border">Email</th>
              <th className="py-2 px-4 border">Phone</th>
            </tr>
          </thead>
          <tbody className='text-sm '>
            {orders.map((order) => (
              <tr key={order._id}>
                <td className="py-2 px-4 border">{formatOrderId(order._id)}</td>
                <td className="py-2 px-4 border">{order.user.firstName + " " + order.user.lastName || 'N/A'}</td>
                <td className="py-2 px-4 border">{order.user.email || 'N/A'}</td>
                <td className="py-2 px-4 border">{order.user.phoneNumber || 'N/A'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Edit Order Modal */}
      {editOrderData && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 ">
          <div className="bg-white p-5 rounded h-[500px] pb-10 overflow-scroll">
            <h3 className="text-lg font-bold">Edit Order</h3>

            <form onSubmit={(e) => {
              e.preventDefault();
              submitEditOrder(editOrderData);
            }}>
              {editOrderData.items.map((item, index) => (
                <div key={index} className="mb-2">
                  <input
                    type="text"
                    value={item.title}
                    onChange={(e) => {
                      const newItems = [...editOrderData.items];
                      newItems[index].title = e.target.value;
                      setEditOrderData({ ...editOrderData, items: newItems });
                    }}
                    placeholder="Item Title"
                    className="border px-2 py-1 w-full"
                  />
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => {
                      const newItems = [...editOrderData.items];
                      newItems[index].quantity = Number(e.target.value);
                      setEditOrderData({ ...editOrderData, items: newItems });
                    }}
                    placeholder="Quantity"
                    className="border px-2 py-1 w-full mt-2"
                  />
                  <input
                    type="number"
                    value={item.price}
                    onChange={(e) => {
                      const newItems = [...editOrderData.items];
                      newItems[index].price = Number(e.target.value);
                      setEditOrderData({ ...editOrderData, items: newItems });
                    }}
                    placeholder="Price"
                    className="border px-2 py-1 w-full mt-2"
                  />
                </div>
              ))}
              <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Update Order</button>
              <button onClick={() => setEditOrderData(null)} className="bg-gray-300 text-black px-4 py-2 rounded ml-2">Cancel</button>
            </form>
          </div>
        </div>
      )}
      {/* Edit Order Modal */}

      {/* Confirmation Delete Dialog */}
      {confirmDelete && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-5 rounded">
            <h3 className="text-lg font-bold">Confirm Delete</h3>
            <p>Are you sure you want to delete this order?</p>
            <div className="flex justify-end mt-4">
              <button onClick={() => setConfirmDelete(false)} className="bg-gray-300 text-black px-4 py-2 rounded mr-2">Cancel</button>
              <button onClick={handleRemoveOrder} className="bg-red-500 text-white px-4 py-2 rounded">Delete</button>
            </div>
          </div>
        </div>
      )}
      {/* Confirmation Delete Dialog */}
    </div>
  );
};

export default Dashboard;
