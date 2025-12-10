const ErrorMessage = ({ error }: { error: string }) => {
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-red-100">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h2 className="text-xl font-bold text-red-600">خطا</h2>
          <p className="mt-4 text-gray-700">{error}</p>
        </div>
      </div>
    </div>
  );
};

export default ErrorMessage;
