import { X } from "lucide-react";
import { createPortal } from "react-dom";

type Props = {
  closePopup: () => void;
};

export default function CustomerPopup({ closePopup }: Props) {
  return createPortal(
    <div
      className="fixed inset-0 w-screen h-screen bg-black/40 backdrop-blur-xl flex items-center justify-center z-50"
      onClick={(e) => e.stopPropagation()}
    >
      <X className="mb-3 cursor-pointer" onClick={closePopup} />

      <p className="mb-2">جستجوی مشتری</p>

      <form className="flex gap-3">
        <button className="bg-primary text-white px-3 py-1 rounded-sm">
          جستجو
        </button>
        <input
          className="border px-3 py-2 border-gray-500 focus:outline-primary w-90 text-sm rounded-2xl"
          type="text"
          placeholder="نام مشتری را وارد کنید"
        />
      </form>

      <div className="mt-4 text-center">
        <p>جستجو کنید</p>
        <p className="mt-9 text-primary cursor-pointer">
          ثبت مشتری جدید <span>+</span>
        </p>
      </div>
    </div>,
    document.body
  );
}
