import { X } from "lucide-react";

type Props = {
  closePopup: () => void;
};

export default function PurchasePopup({ closePopup }: Props) {
  return (
    <div
      className="bg-white w-130 h-60 p-4 shadow-xl rounded-xl"
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
    </div>
  );
}
