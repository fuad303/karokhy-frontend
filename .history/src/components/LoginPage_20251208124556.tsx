import React from "react";

function LoginPage() {
  return (
    <div>
      <div
        className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8"
        dir="rtl"
      >
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900 dark:text-white">
            ورود
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-6">
            {/* نام کاربری */}
            <div>
              <label
                htmlFor="username"
                className="block text-sm/6 font-medium text-gray-900 text-right"
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
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
                />
              </div>
            </div>

            {/* رمز ورود */}
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm/6 font-medium text-gray-900 text-right"
                >
                  رمز ورود
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  type="password"
                  name="password"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
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
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:shadow-none dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-500"
              >
                ورود
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
