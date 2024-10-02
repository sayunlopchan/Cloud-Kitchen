import { useEffect, useState } from 'react';
import axios from 'axios';
import { orderUrl } from '../../apiPath/url';

const Dashboard = () => {
  const [orders, setOrders] = useState([]);
  const [newOrder, setNewOrder] = useState(null);
  const [notification, setNotification] = useState('');

  // Fetch orders from the backend
  const fetchOrders = async () => {
    try {
      const response = await axios.get(orderUrl); // Adjust the endpoint as necessary
      setOrders(response.data); // Assume the response is an array of orders
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
    }, 5000); // Fetch new data every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  // Effect to handle new order notifications
  useEffect(() => {
    if (newOrder) {
      setNotification(`New order received: ${newOrder._id}`);
      setTimeout(() => setNotification(''), 3000); // Clear notification after 3 seconds
    }
  }, [newOrder]);

  // Handle new order arrival (you can replace this with a real-time solution)
  const handleNewOrder = (order) => {
    setNewOrder(order);
  };

  return (
    <div className="p-10 h-screen">
      <h2 className="text-2xl font-bold mb-4">Order Summary</h2>

      {/* Notification */}
      {notification && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">
          <span className="block sm:inline">{notification}</span>
        </div>
      )}

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border border-gray-300">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="py-2 px-4 border">Order ID</th>
              <th className="py-2 px-4 border">Order Items</th>
              <th className="py-2 px-4 border">Quantity</th>
              <th className="py-2 px-4 border">Amount</th>
              <th className="py-2 px-4 border">Discount</th>
              <th className="py-2 px-4 border">Delivery Charge</th>
              <th className="py-2 px-4 border">Total</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <td className="py-2 px-4 border">{order._id}</td>
                <td className="py-2 px-4 border">{order.items.map(item => item.title).join(', ')}</td>
                <td className="py-2 px-4 border">{order.items.reduce((total, item) => total + item.quantity, 0)}</td>
                <td className="py-2 px-4 border">${order.totalPrice}</td>
                <td className="py-2 px-4 border">{order.discount || '0%'}</td>
                <td className="py-2 px-4 border">${order.deliveryCharge || '0'}</td>
                <td className="py-2 px-4 border">${order.totalPrice - (order.discount ? (order.totalPrice * parseFloat(order.discount) / 100) : 0) + (order.deliveryCharge || 0)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
