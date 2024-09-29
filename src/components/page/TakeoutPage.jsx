import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const TakeoutPage = () => {
  const cart = useSelector((state) => state.allCart.cart); // Access cart from Redux state
  const totalPrice = useSelector((state) => state.allCart.totalPrice); // Access totalPrice from Redux state

  return (
    <div className="p-10 lg:py-5 lg:px-20">

      <div className="flex items-center gap-2 pb-1 pl-5 text-2xl font-semibold ">
        <NavLink
          to={'/cart'}
        >
          CART
        </NavLink>
        &gt;
        <NavLink
          to={'#'}
          className={'text-colorRed'}
        >
          Takeout Location
        </NavLink>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 border-2 rounded-lg gap-5 px-3 p-2">
        <h2 className="md:col-span-12 px-3 font-semibold text-lg max-md:order-2">
          Takeout Location
        </h2>

        <div className="md:col-span-7 border-2 flex justify-center rounded-lg overflow-hidden max-md:order-3">
          <div className="h-[400px] w-full bg-gray-400 "></div>
        </div>

        <div className="md:col-span-5 border-2 max-md:order-1">
          <h2 className="font-semibold text-xl lg:text-3xl text-center m-2">Order Summary</h2>

          {/* Loop through cart items */}
          <div className="p-5">
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
        </div>

      </div>
    </div>
  );
};

export default TakeoutPage;
