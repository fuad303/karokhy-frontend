import type React from "react";
import { useEffect, useRef } from "react";
import { useApp } from "../../context/Context";

const ErrorMessageCompo = ({ onClose }: { onClose: () => void }) => {
  const { backendErrorMessage } = useApp();
  useEffect(() => {
    const handlEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handlEsc);
    return () => document.removeEventListener("keydown", handlEsc);
  }, [onClose]);

  const PopupRef = useRef<HTMLDivElement>(null);
  const handleClickoutSide = (e: React.MouseEvent<HTMLDivElement>) => {
    if (PopupRef.current && !PopupRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center backdrop-blur-xl z-50"
      onClick={handleClickoutSide}
    >
      <div
        ref={PopupRef}
        className="bg-white p-6 rounded-lg shadow-md text-center max-w-sm w-full"
      >
        <h2 className="text-xl font-bold text-red-600">خطا</h2>
        <p className="mt-4 text-gray-700">{backendErrorMessage}</p>

        <button
          onClick={onClose}
          className="mt-6 px-4 py-2 bg-primary text-white rounded hover:bg-primary"
        >
          بستن
        </button>
      </div>
    </div>
  );
};

export default ErrorMessageCompo;
