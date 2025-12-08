import React from "react";

function LoginPage() {
  return (
    <div
      className="min-h-screen bg-gray-300 flex items-center justify-center"
      dir="rtl"
    >
      <div className="flex flex-col justify-center px-6 py-12 sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-white">
          ورود
        </h2>

        <form action="#" method="POST" className="mt-10 space-y-6">
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-200 text-right"
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
                className="block w-full rounded-md bg-white px-3 py-2 text-base text-white border border-gray-400 placeholder:text-gray-200 focus:border-indigo-500 focus:outline-none sm:text-sm"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-200 text-right"
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
                className="block w-full rounded-md bg-white px-3 py-2 text-base text-white border border-gray-400 placeholder:text-gray-200 focus:border-indigo-500 focus:outline-none sm:text-sm"
              />
            </div>
          </div>

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
