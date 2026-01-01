import { useEffect, useState } from "react";
import CustomerPopup from "../components/CustomerPopup";

export default function Purchase() {
  const [isOpen, setIsOpen] = useState(false);
  const [paymentType, setPaymentType] = useState<"نقدی" | "قرضه" | "">("");

  function openPopup() {
    setIsOpen(true);
  }

  function closePopup() {
    setIsOpen(false);
  }

  useEffect(() => {
    if (!isOpen) return;

    function handleEsc(e: KeyboardEvent) {
      if (e.key === "Escape") {
        closePopup();
      }
    }

    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen]);

  return (
    <>
      <div
        className={`bg-white p-6 w-200 flex flex-col justify-center items-center rounded-xl transition-all duration-200 ${
          isOpen ? "blur-sm pointer-events-none select-none" : ""
        }`}
      >
        <h2 className="text-3xl text-primary">خرید جنس</h2>

        <div className="w-150 flex justify-end">
          <button
            onClick={openPopup}
            className="bg-primary text-white py-1 px-3 rounded-sm outline-none hover:bg-blue-600"
          >
            انتخاب مشتری
          </button>
        </div>

        <form className="mt-5">
          <div>
            <p className="mb-2 text-gray-800 font-bold">نوع پرداخت</p>
            <div className=" w-50 flex gap-2 flex-wrap">
              <div
                className={`flex p-1 px-3 rounded-2xl gap-2 cursor-pointer transition ${
                  paymentType === "نقدی"
                    ? "border border-primary"
                    : "border border-gray-500"
                }`}
              >
                <label htmlFor="" className=" text-gray-800">نقدی</label>
                <input
                  type="radio"
                  name="paymentType"
                  value="نقدی"
                  checked={paymentType === "نقدی"}
                  onChange={(e) => setPaymentType(e.target.value as "نقدی")}
                />
              </div>
              <div
                className={`flex p-1 px-3 rounded-2xl gap-2 cursor-pointer transition  ${
                  paymentType === "قرضه"
                    ? "border border-primary"
                    : "border border-gray-500"
                }`}
              >
                <label className=" text-gray-800">قرضه</label>
                <input
                  type="radio"
                  name="paymentType"
                  value="قرضه"
                  checked={paymentType === "قرضه"}
                  onChange={(e) => setPaymentType(e.target.value as "قرضه")}
                />
              </div>

              {paymentType === "قرضه" && (
                <div className="mt-3">
                  <input
                    type="number"
                    className="py-1 px-2 text-[14px] w-70 focus:outline-primary border border-gray-600 rounded-sm"
                    placeholder="مقدار قرضه را وارد کنید"
                  />
                </div>
              )}
            </div>
          </div>

          <div className="mt-7 flex justify-between gap-4">
            <div className="flex flex-col gap-1">
              <label className=" text-gray-800 font-bold">قیمت</label>
              <input
                type="number"
                className="py-1 px-2 text-[14px] w-70 focus:outline-primary border border-gray-600 rounded-sm"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className=" text-gray-800 font-bold">مقدار</label>
              <input
                type="number"
                className="py-1 px-2 text-[14px] w-70 focus:outline-primary border border-gray-600 rounded-sm"
              />
            </div>
          </div>

          <div className="flex flex-col mt-6">
            <label className="text-gray-800">توضیحات</label>
            <textarea
              placeholder="توضیحات"
              className=" focus:outline-primary border border-gray-600 rounded-2xl p-2"
            />
          </div>

          <div className="mt-6 flex flex-col gap-2">
            <p className="text-gray-800">
              مشتری:
              <span className="text-gray-400">مشتری را انتخاب کنید</span>
            </p>
            <p className="text-gray-800">شماره تماس:</p>
          </div>

          <div className="text-center mt-6 ">
            <button className="bg-primary text-white rounded-sm py-2 px-2 cursor-pointer hover:bg-blue-600 w-full text-xl">
              ثبت خرید
            </button>
          </div>
        </form>
      </div>

      {/* MODAL OVERLAY */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <CustomerPopup closePopup={closePopup} />
        </div>
      )}
    </>
  );
}
