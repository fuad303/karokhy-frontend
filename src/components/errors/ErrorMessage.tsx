const ErrorMessage = ({
  error,
  onClose,
}: {
  error: string;
  onClose: () => void;
}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-blue-100/40 backdrop-blur-lg z-50">
      <div className="bg-white p-6 rounded-lg shadow-md text-center">
        <h2 className="text-xl font-bold text-red-600">خطا</h2>
        <p className="mt-4 text-gray-700">{error}</p>
        <button
          onClick={onClose}
          className="mt-6 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-500"
        >
          بستن
        </button>
      </div>
    </div>
  );
};

export default ErrorMessage;
