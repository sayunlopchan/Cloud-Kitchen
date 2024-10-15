const ConfirmationDialog = ({ message, onConfirm, onCancel }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[1100]">
      <div className="bg-white p-4 rounded-lg shadow-lg w-[400px]">
        <h2 className="text-lg mb-4">{message}</h2>
        <div className="flex justify-end gap-4">
          <button
            onClick={onConfirm}
            className="bg-green-500 text-white px-4 py-2 rounded-lg"
          >
            Confirm
          </button>
          <button
            onClick={onCancel}
            className="bg-red-500 text-white px-4 py-2 rounded-lg"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationDialog;
