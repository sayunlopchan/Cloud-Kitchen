// components/Dialog.js

import Sad_effect from "../AnimatedComponent/Sad_effect";
import Success_effect from "../AnimatedComponent/Success_effect";

const Dialog = ({ isOpen, onClose, message, isSuccess }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[1000]">
      <div className={`bg-white rounded-lg p-5 w-80 lg:w-[450px] lg:h-[300px] text-center ${isSuccess ? 'border border-green-500' : 'border border-red-500'}`}>
        <h3 className="font-semibold">{isSuccess ? 'Success' : 'Error'}</h3>
        <p>{message}</p>
        <button onClick={onClose} className="mt-4 bg-black text-white px-4 py-2 rounded hover:bg-gray-700 relative z-20">
          Close
        </button>
        <div className="relative -z-0">
          {
            isSuccess ?
              <div className="absolute -top-[132px]">
                <Success_effect />
              </div>
              :
              <div className="absolute -top-3">
                <Sad_effect />
              </div>
          }
        </div>
      </div>
    </div>
  );
};

export default Dialog;
