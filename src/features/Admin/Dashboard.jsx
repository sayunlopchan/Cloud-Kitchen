
const Dashboard = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
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
            <tr>
              <td className="py-2 px-4 border">#12345</td>
              <td className="py-2 px-4 border">Item A, Item B</td>
              <td className="py-2 px-4 border">2</td>
              <td className="py-2 px-4 border">$200</td>
              <td className="py-2 px-4 border">10%</td>
              <td className="py-2 px-4 border">$5</td>
              <td className="py-2 px-4 border">$185</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border">#67890</td>
              <td className="py-2 px-4 border">Item C</td>
              <td className="py-2 px-4 border">1</td>
              <td className="py-2 px-4 border">$100</td>
              <td className="py-2 px-4 border">5%</td>
              <td className="py-2 px-4 border">$3</td>
              <td className="py-2 px-4 border">$95</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
