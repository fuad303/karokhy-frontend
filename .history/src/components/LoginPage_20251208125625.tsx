import React from "react";

function LoginPage() {
  return (
    <div
      className="min-h-screen bg-blue-600 flex items-center justify-center relative"
      dir="rtl"
    >
      {/* پس‌زمینه بلور */}
      <div className="absolute inset-0 bg-blue-600 bg-opacity-70 backdrop-blur-sm"></div>

      {/* فرم چایلد */}
      <div className="relative flex flex-col justify-center px-6 py-12 sm:w-full sm:max-w-sm bg-white border border-gray-300 rounded-lg shadow-md">
        {/* عنوان */}
        <h2 className="text-center text-2xl font-bold tracking-tight text-black">
          ورود
        </h2>

        {/* فرم */}
        <form action="#" method="POST" className="mt-6 space-y-6">
          {/* نام کاربری */}
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-black text-right"
            >
              نام کاربری
            </label>
            <div className="mt-2">
              <input
                id="username"
                type="text"
                name="username"
                required
                autoComplete="username"
                className="block w-full rounded-md bg-white px-3 py-2 text-base text-black border border-gray-300 placeholder:text-gray-400 focus:border-blue-500 focus:outline-none sm:text-sm"
              />
            </div>
          </div>

          {/* رمز ورود */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-black text-right"
            >
              رمز ورود
            </label>
            <div className="mt-2">
              <input
                id="password"
                type="password"
                name="password"
                required
                autoComplete="current-password"
                className="block w-full rounded-md bg-white px-3 py-2 text-base text-black border border-gray-300 placeholder:text-gray-400 focus:border-blue-500 focus:outline-none sm:text-sm"
              />
            </div>
          </div>

          {/* دکمه نقش‌ها */}
          <div className="flex gap-4 mt-4 justify-center">
            <button
              type="button"
              className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
              مدیر
            </button>

            <button
              type="button"
              className="px-4 py-2 bg-green-600 text-white font-semibold rounded hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-400"
            >
              شریک
            </button>

            <button
              type="button"
              className="px-4 py-2 bg-yellow-600 text-white font-semibold rounded hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            >
              حسابدار
            </button>
          </div>

          {/* دکمه ورود */}
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              ورود
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
