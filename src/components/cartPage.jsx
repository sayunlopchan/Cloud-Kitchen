import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getCartTotal,
  removeItem,
  decreaseItemQuantity,
  increaseItemQuantity,
} from "../features/cartSlice";
import { NavLink } from "react-router-dom";

const CartPage = () => {
  const { cart, totalQuantity, totalPrice } = useSelector(
    (state) => state.allCart
  );
  const dispatch = useDispatch();

  // Calculate the total discount based on percentage
  const itemDiscount = cart.reduce((acc, item) => {
    return acc + (item.discount ? (item.discount / 100) * item.price * item.quantity : 0);
  }, 0);

  // Final total price after applying discount
  const finalTotal = totalPrice - itemDiscount;

  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);

  return (
    <section className="bg-white py-8 antialiased md:py-16">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">Shopping Cart</h2>
        <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
          <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">

            {/* Cart items Loop */}
            <div className="space-y-6">
              {cart.length === 0 ? (
                <div className="flex items-center justify-center h-40 bg-gray-300">
                  <span className="text-lg font-semibold text-gray-700">Cart is Empty</span>
                </div>
              ) : (
                cart.map((item, idx) => (
                  <div key={idx} className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm md:p-6">
                    <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                      <a href="#" className="shrink-0 md:order-1">
                        <img className="size-20" src={item.img} alt={item.title} />
                      </a>
                      <div className="flex items-center justify-between md:order-3 md:justify-end">
                        <div className="flex items-center">
                          <button
                            onClick={() => dispatch(decreaseItemQuantity(item.id))}
                            type="button"
                            className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100"
                          >
                            <svg className="h-2.5 w-2.5 text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h16" />
                            </svg>
                          </button>
                          <input
                            type="text"
                            value={item.quantity}
                            className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none"
                            readOnly
                          />
                          <button
                            onClick={() => dispatch(increaseItemQuantity(item.id))}
                            type="button"
                            className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100"
                          >
                            <svg className="h-2.5 w-2.5 text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 1v16M1 9h16" />
                            </svg>
                          </button>
                        </div>
                        <div className="text-end md:order-4 md:w-32">
                          <p className="text-base font-bold text-gray-900">Rs.{item.price}</p>
                        </div>
                      </div>
                      <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                        <NavLink to={`/product/${item.id}`} className="text-base font-medium text-gray-900 hover:underline">
                          {item.title}
                        </NavLink>
                        <div className="flex items-center gap-4">
                          <button className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 hover:underline">
                            Add to Favorites
                          </button>
                          <button
                            onClick={() => dispatch(removeItem(item.id))}
                            className="inline-flex items-center text-sm font-medium text-red-600 hover:underline"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
            {/* Cart items Loop */}

          </div>

          {/* Order Summary */}
          <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
            <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
              <p className="text-xl font-semibold text-gray-900">Order summary</p>
              <div className="space-y-4">
                <div className="space-y-2">
                  <dl className="flex items-center justify-between gap-4">
                    <dt className="text-base font-normal text-gray-500">Total Quantity</dt>
                    <dd className="text-base font-medium text-gray-900">{totalQuantity}</dd>
                  </dl>
                  <dl className="flex items-center justify-between gap-4">
                    <dt className="text-base font-normal text-gray-500">Discount</dt>
                    <dd className="text-base font-medium text-green-600">Rs.{itemDiscount}</dd>
                  </dl>
                </div>
                <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2">
                  <dt className="text-base font-bold text-gray-900">Total</dt>
                  <dd className="text-base font-bold text-gray-900">Rs.{finalTotal}</dd>
                </dl>
              </div>

              {/* Coupon Code Input */}
              <div className="space-y-4">
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
                  placeholder="Enter Coupon Code"
                />
                <button
                  className="w-full px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700"
                >
                  Apply Coupon
                </button>
              </div>
              <div className="flex flex-col items-center">
                <NavLink
                  to="/checkout"
                  className="flex w-full items-center justify-center rounded-lg px-5 py-2.5 text-sm font-medium transition-all duration-300 border-2 hover:border-green-500"
                >
                  Proceed to Checkout
                </NavLink>

                <p>Or</p>

                <NavLink
                  to="/takeout-location-near-me"
                  className="flex w-full items-center justify-center rounded-lg px-5 py-2.5 text-sm font-medium bg-black transition-all duration-300 border-2 text-white"
                >
                  Takeout
                </NavLink>
              </div>
            </div>
          </div>

          {/* Order Summary */}
        </div>
      </div>
    </section>
  );
};

export default CartPage;

