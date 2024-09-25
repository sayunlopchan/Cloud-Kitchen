import { useDispatch, useSelector } from "react-redux";
import { getCartTotal } from "../../features/cartSlice";



import { HiOutlineShoppingBag } from "react-icons/hi2";
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const img = "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";




const Header = () => {
  const nav = useNavigate()

  const { cart, totalQuantity } = useSelector((state) => state.allCart);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);


  return (
    <header className="flex justify-between px-5 py-2">
      <img src={img} alt={img}
        onClick={() => nav("/")}
        className="size-[60px] cursor-pointer" />
      <div className="flex items-center gap-3">
        <div className="relative">
          <span
            className={`absolute top-1 right-0 size-4 flex items-center justify-center rounded-full text-[10px] border border-gray-500  ${totalQuantity > 0 ? 'animate-bounce border-none text-white bg-red-500' : 'bg-white'}`}
          >
            {totalQuantity}
          </span>

          <HiOutlineShoppingBag
            size={35}
            onClick={() => nav("/cart")}
            className="cursor-pointer"
          />

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
