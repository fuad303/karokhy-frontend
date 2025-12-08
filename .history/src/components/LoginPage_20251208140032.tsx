import React, { useState } from "react";
import { useForm } from "react-hook-form";

function LoginPage() {
  const [role, setRole] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center relative bg-blue-300"
      dir="rtl"
    >
      <div className="absolute inset-0 bg-blue-100 bg-opacity-70 backdrop-blur-md"></div>

      <div className="relative flex flex-col justify-center px-6 py-12 sm:w-full sm:max-w-sm bg-white border border-gray-300 rounded-lg shadow-md">
        <h2 className="mt-0 text-center text-2xl font-bold tracking-tight text-black">
          ورود
        </h2>

        <form
          action="#"
          onSubmit={handleSubmit(onSubmit)}
          method="POST"
          className="mt-6 space-y-6"
        >
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
                {...register("username", { required: "username is required" })}
                required
                autoComplete="username"
                className="block w-full rounded-md bg-white px-3 py-2 text-base text-black border border-gray-300 placeholder:text-gray-400 focus:border-blue-500 focus:outline-none sm:text-sm"
              />
            </div>
            {errors.username && (
              <p className="mt-2 text-sm text-red-600" role="alert">
                {errors.username.message}
              </p>
            )}
          </div>

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
                {...register("password", { required: "password is required" })}
                required
                autoComplete="current-password"
                className="block w-full rounded-md bg-white px-3 py-2 text-base text-black border border-gray-300 placeholder:text-gray-400 focus:border-blue-500 focus:outline-none sm:text-sm"
              />
            </div>
            {errors.password && (
              <p className="mt-2 text-sm text-red-600" role="alert">
                {errors.password.message}
              </p>
            )}
          </div>

          <div className="mt-4">
            <span className="text-sm font-medium text-black">نقش:</span>
            <div className="flex gap-4 mt-2">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  {...register("role", { required: "role is required " })}
                  value="ADMIN"
                  checked={role === "ADMIN"}
                  onChange={(e) => setRole(e.target.value)}
                  className="accent-indigo-600"
                />
                <span>مدیر</span>
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  {...register("role", { required: "role is required " })}
                  value="Partner"
                  checked={role === "Partner"}
                  onChange={(e) => setRole(e.target.value)}
                  className="accent-green-600"
                />
                <span>شریک</span>
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  {...register("role", { required: "role is required " })}
                  value="Accountant"
                  checked={role === "Accountant"}
                  onChange={(e) => setRole(e.target.value)}
                  className="accent-yellow-600"
                />
                <span>حسابدار</span>
              </label>
              {errors.role && (
                <p className="mt-2 text-sm text-red-600" role="alert">
                  {errors.role.message}
                </p>
              )}
            </div>
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
