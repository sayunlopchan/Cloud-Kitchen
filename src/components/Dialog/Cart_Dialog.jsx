import Lottie from "lottie-react";
import AddedCart from "../../assets/animation/Cart_Succesful.json";
import EmptyCart from "../../assets/animation/empty-cart.json";

const Cart_Dialog = ({ isOpen, onClose, message, isSuccess }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[1000]">

      <div className="h-[300px]  rounded-lg overflow-hidden bg-white mx-5 lg:mx-0">
        <div className="w-full h-50 pt-3 pb-5">
          {
            isSuccess ?
              <div className=" w-full h-36 rounded-t-lg flex justify-center items-center">
                <Lottie
                  animationData={AddedCart}
                  loop={false}
                  autoplay={true}
                  style={{ width: '220px', height: '220px' }} />
              </div>
              :
              <div className="w-full h-36 rounded-t-lg flex justify-center items-center">
                <Lottie
                  animationData={EmptyCart}
                  loop={false}
                  autoplay={true}
                  style={{ width: '100%', height: '100%' }} />
              </div>
          }
        </div>
        <div className="w-full text-center p-3 text-gray-600">
          {
            isSuccess ?
              <span>🎉 Success! Your item has been added to the cart.</span>
              :
              <span>Your cart is empty! Add at least one item to proceed.</span>
          }
        </div>
        <div className="flex justify-center">
          <button onClick={onClose} className="rounded-md px-10 py-2 bg-black text-white transition-all duration-300 hover:scale-90">Close</button>
        </div>
      </div>

    </div>
  );
};

export default Cart_Dialog;
