// components/Dialog.js

const Dialog = ({ isOpen, onClose, message, isSuccess }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[1000]">
      <div className={`bg-white rounded-lg p-5 w-80 text-center ${isSuccess ? 'border border-green-500' : 'border border-red-500'}`}>
        <h3 className="font-semibold">{isSuccess ? 'Success' : 'Error'}</h3>
        <p>{message}</p>
        <button onClick={onClose} className="mt-4 bg-black text-white px-4 py-2 rounded hover:bg-gray-700">
          Close
        </button>
      </div>
    </div>
  );
};

export default Dialog;
