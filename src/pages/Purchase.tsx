import { useEffect, useState } from "react";
import CustomerPopup from "../components/CustomerPopup";
import { type PurchaseFormData } from "../schema/purchase.schema";
import { purchaseSchema } from "../schema/purchase.schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export default function Purchase() {
  const [isOpen, setIsOpen] = useState(false);
  const [paymentType, setPaymentType] = useState<"نقدی" | "قرضه" | "">("");
  const [expenseType, setExpenseType] = useState<"با مصارف" | "بی مصارف" | "">(
    ""
  );

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<PurchaseFormData>({
    resolver: zodResolver(purchaseSchema),
  });

  const currency = watch("currency");

  useEffect(() => {
    if (!isOpen) return;
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen]);

  function onSubmit(data: PurchaseFormData) {
    console.log("VALID DATA:", data);
    // send to API here
  }

  return (
    <>
      <div
        className={`bg-white w-full max-w-xl md:max-w-2xl lg:max-w-3xl
        mx-auto p-4 sm:p-6 rounded-xl transition ${
          isOpen ? "blur-sm pointer-events-none select-none" : ""
        }`}
      >
        <h2 className="text-2xl sm:text-3xl text-primary text-center">
          خرید جنس
        </h2>

        <div className="flex justify-end mt-4">
          <button
            onClick={() => setIsOpen(true)}
            className="bg-primary text-white py-1 px-4 rounded hover:bg-blue-600"
          >
            انتخاب مشتری
          </button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Payment Type */}
            <div>
              <p className="mb-2 font-bold text-gray-800">نوع پرداخت</p>

              <div className="flex flex-wrap gap-3">
                {(["نقدی", "قرضه"] as const).map((type) => {
                  const id = `payment-${type}`;

                  return (
                    <label
                      key={type}
                      htmlFor={id}
                      className={`flex items-center gap-2 px-4 py-1 rounded-2xl cursor-pointer border transition
                        ${
                          paymentType === type
                            ? "border-primary bg-blue-50"
                            : "border-gray-400"
                        }`}
                    >
                      <input
                        {...register("paymentType")}
                        id={id}
                        type="radio"
                        name="paymentType"
                        value={type}
                        checked={paymentType === type}
                        onChange={() => setPaymentType(type)}
                        className="accent-blue-600"
                      />
                      <span>{type}</span>
                    </label>
                  );
                })}
              </div>

              {paymentType === "قرضه" && (
                <input
                  {...register("installmentAmount", { valueAsNumber: true })}
                  type="number"
                  placeholder="مقدار قرضه"
                  className="mt-3 w-full py-1 px-2 border rounded focus:outline-primary"
                />
              )}
              {errors.paymentType && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.paymentType.message}
                </p>
              )}
            </div>

            {/* Expense Type */}
            <div>
              <p className="mb-2 font-bold text-gray-800">نوع معامله</p>

              <div className="flex flex-wrap gap-3">
                {(["با مصارف", "بی مصارف"] as const).map((type) => {
                  const id = `expense-${type}`;

                  return (
                    <label
                      key={type}
                      htmlFor={id}
                      className={`flex items-center gap-2 px-4 py-1 rounded-2xl cursor-pointer border transition
                        ${
                          expenseType === type
                            ? "border-primary bg-blue-50"
                            : "border-gray-400"
                        }`}
                    >
                      <input
                        {...register("expenseType")}
                        id={id}
                        type="radio"
                        name="expenseType"
                        value={type}
                        checked={expenseType === type}
                        onChange={() => setExpenseType(type)}
                        className="accent-blue-600"
                      />
                      <span>{type}</span>
                    </label>
                  );
                })}
                {errors.expenseType && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.expenseType.message}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Price & Quantity */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="font-bold text-gray-800">قیمت</label>
              <input
                {...register("unitPrice", { valueAsNumber: true })}
                type="number"
                className="w-full py-1 px-2 border rounded focus:outline-primary"
              />
              {errors.unitPrice && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.unitPrice.message}
                </p>
              )}
            </div>

            <div>
              <label className="font-bold text-gray-800">مقدار</label>
              <input
                {...register("quantity", { valueAsNumber: true })}
                type="number"
                className="w-full py-1 px-2 border rounded focus:outline-primary"
              />
              {errors.quantity && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.quantity.message}
                </p>
              )}
            </div>
          </div>

          {/* Measure Unit & Currency */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Measure Unit */}
            <div>
              <label className="font-bold text-gray-800">
                واحد اندازه‌گیری
              </label>
              <select
                {...register("measureUnit")}
                defaultValue=""
                className="w-full py-2 px-2 border rounded focus:outline-primary"
              >
                <option value="" disabled>
                  انتخاب واحد
                </option>
                <option value="KG">کیلوگرام</option>
                <option value="LITER">لیتر</option>
                <option value="PIECE">دانه</option>
              </select>

              {errors.measureUnit && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.measureUnit.message}
                </p>
              )}
            </div>

            {/* Currency */}
            <div>
              <label className="font-bold text-gray-800">واحد پول</label>
              <select
                {...register("currency")}
                defaultValue=""
                className="w-full py-2 px-2 border rounded focus:outline-primary"
              >
                <option value="" disabled>
                  انتخاب واحد پول
                </option>
                <option value="TOMAN">تومان</option>
                <option value="USD">دالر</option>
                <option value="AFG">افغانی</option>
              </select>

              {errors.currency && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.currency.message}
                </p>
              )}
            </div>
          </div>

          {currency && currency !== "USD" && (
            <div className="flex flex-col">
              <label className="font-bold text-gray-700">
                دلار به قیمت روز
              </label>
              <input
                {...register("exchangeRate")}
                type="number"
                className="px-3 py-1.5 focus:outline-primary border rounded-sm"
              />
              {errors.exchangeRate && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.exchangeRate.message}
                </p>
              )}
            </div>
          )}

          {/* Description */}
          <div>
            <label className="text-gray-800">توضیحات</label>
            <textarea
              {...register("description")}
              rows={3}
              className="w-full border rounded-2xl p-2 focus:outline-primary resize-non"
            />
            {errors.description && (
              <p className="text-red-500 text-sm mt-1">
                {errors.description.message}
              </p>
            )}
          </div>

          {/* Customer Info */}
          <div className="space-y-1">
            <p>
              مشتری:
              <span className="text-gray-400 mr-2">مشتری را انتخاب کنید</span>
            </p>
            <p>شماره تماس:</p>
          </div>

          <button className="w-full bg-primary text-white py-2 text-lg rounded hover:bg-blue-600">
            ثبت خرید
          </button>
        </form>
      </div>

      {isOpen && <CustomerPopup closePopup={() => setIsOpen(false)} />}
    </>
  );
}
