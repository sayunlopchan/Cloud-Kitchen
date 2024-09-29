import { useDispatch, useSelector } from "react-redux";
import { getCartTotal } from "../../features/cartSlice";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

const img = "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const Header = () => {
  const nav = useNavigate();
  const location = useLocation(); // Get the current location

  const { cart, totalQuantity } = useSelector((state) => state.allCart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart, dispatch]);

  // Check if the current pathname matches the specified routes
  const isBgClay =
    location.pathname.includes("/product-detail/") ||
    location.pathname === "/menu" ||
    location.pathname === "/cart" |
    location.pathname === "/most-sold" ||
    location.pathname === "/popular-dishes";


  return (
    <header className={`flex justify-between px-5 py-2 ${isBgClay ? 'bg-clay' : ''}`}>
      <img
        src={img}
        alt="Logo"
        onClick={() => nav("/")}
        className="size-[60px] cursor-pointer"
      />
      <div className="flex items-center gap-3">

        <div
          onClick={() => nav("/cart")}
          className="relative group cursor-pointer">
          <span
            className={`absolute top-1 right-0 size-4 flex items-center justify-center rounded-full text-[10px] border border-gray-500 ${totalQuantity > 0 ? 'animate-bounce border-none text-white bg-red-500' : 'bg-white'}`}
          >
            {totalQuantity}
          </span>
          <HiOutlineShoppingBag size={35} />
        </div>

        <div className="space-x-1 bg-white p-2 border ">
          <NavLink className={"cursor-pointer gradient-Text "}>Login</NavLink>
          <span>|</span>
          <NavLink className={"cursor-pointer"}>SignUp</NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
