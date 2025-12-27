export default function Purchase() {
  return (
    <div className="bg-white p-6 w-200 flex flex-col justify-center items-center rounded-xl">
      <h2 className="text-3xl text-primary">خرید جنس</h2>
      <div className="w-150 flex justify-end">
        <button className=" bg-primary text-white py-1 px-3 rounded-sm hover:bg-blue-600 cursor-pointer">
          انتخاب مشتری
        </button>
      </div>

      <div className="mt-5">
        <form>
          <div className="flex gap-40">
            <div>
              <p>نوع پرداخت</p>
              <div className="flex gap-2">
                <div className="flex p-1 px-3 border border-gray-500 rounded-2xl gap-2">
                  <label htmlFor="" className=" text-gray-800">
                    نقدی
                  </label>
                  <input type="radio" />
                </div>
                <div className="flex p-1 px-3 border border-gray-500 rounded-2xl gap-2">
                  <label htmlFor="" className=" text-gray-800">
                    نقدی
                  </label>
                  <input type="radio" />
                </div>
              </div>
            </div>

            <div>
              <p>نوع جنس</p>
              <div className="flex gap-2">
                <div className="flex p-1 px-3 border border-gray-500 rounded-2xl gap-2">
                  <label htmlFor="" className=" text-gray-800">
                    نقدی
                  </label>
                  <input type="radio" />
                </div>
                <div className="flex p-1 px-3 border border-gray-500 rounded-2xl gap-2">
                  <label htmlFor="" className=" text-gray-800">
                    نقدی
                  </label>
                  <input type="radio" />
                </div>
                <div className="flex p-1 px-3 border border-gray-500 rounded-2xl gap-2">
                  <label htmlFor="" className=" text-gray-800">
                    نقدی
                  </label>
                  <input type="radio" />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-7 flex justify-between">
            <div className="flex flex-col gap-1">
              <label htmlFor="" className=" text-gray-800">
                قیمت فی کیلو گرام{" "}
                <span className="text-gray-950">(افغانی)</span>
              </label>
              <input
                type="text"
                className="py-1 px-2 text-[14px] w-70 focus:outline-primary border border-gray-600 rounded-sm"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="" className=" text-gray-800">
                مقدار <span className="text-gray-950">(کیلوگرام)</span>
              </label>
              <input
                type="text"
                className="py-1 px-2 text-[14px] w-70 focus:outline-primary border border-gray-600 rounded-sm"
              />
            </div>
          </div>

          <div className="mt-6">
            <label htmlFor="" className="flex flex-col text-gray-800">
              دسته بندی
            </label>
            <select className="w-150 focus:outline-primary border border-gray-600 rounded-sm">
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
            </select>
          </div>

          <div className="flex flex-col mt-6">
            <label className="text-gray-800">توضیحات</label>
            <textarea
              name=""
              id=""
              placeholder="توضیحات"
              className=" focus:outline-primary border border-gray-600 rounded-2xl p-2"
            ></textarea>
          </div>

          <div className="mt-6 flex flex-col gap-2">
            <p className="text-gray-800">
              مشتری: <span className="text-gray-400">مشتری را انتخاب کنید</span>
            </p>
            <p className="text-gray-800">شماره تماس:</p>
          </div>

          <div className="text-center mt-6">
            <button className="bg-primary text-white rounded-sm py-1 px-2 cursor-pointer hover:bg-blue-600">
              ثبت خرید
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
