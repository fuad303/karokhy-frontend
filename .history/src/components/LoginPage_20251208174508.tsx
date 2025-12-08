import { useForm } from "react-hook-form";
import type { LoginFormType } from "../schema/schema";

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormType>();

  const onSubmit = (data: LoginFormType) => {
    console.log(data);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center relative bg-blue-300"
      dir="rtl"
    >
      <div className="absolute inset-0 bg-blue-100 bg-opacity-70 backdrop-blur-md"></div>

      <div className="relative flex flex-col justify-center px-6  py-6 sm:py-12  sm:my-0  sm:w-full sm:max-w-sm bg-white border border-gray-300 rounded-lg shadow-md">
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
                {...register("username", { required: "نام کاربری ضروری است" })}
                required
                autoComplete="username"
                className="block w-full rounded-md bg-white px-3 py-2 text-base text-black border border-gray-300 placeholder:text-gray-400 focus:border-blue-500 focus:outline-none sm:text-sm"
              />
            </div>
            {errors.username && (
              <p className="mt-2 text-sm text-red-600" role="alert">
                {errors.username?.message}
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
                {...register("password", { required: "رمز ورود ضروری است" })}
                required
                autoComplete="current-password"
                className="block w-full rounded-md bg-white px-3 py-2 text-base text-black border border-gray-300 placeholder:text-gray-400 focus:border-blue-500 focus:outline-none sm:text-sm"
              />
            </div>
            {errors.password && (
              <p className="mt-2 text-sm text-red-600" role="alert">
                {errors.password?.message}
              </p>
            )}
          </div>

          <div className="mt-4">
            <span className="text-sm font-medium text-black">نقش:</span>
            <div className="flex gap-4 mt-2">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  {...register("role", { required: "انتخاب نقش ضروری است " })}
                  value="ADMIN"
                  className="accent-indigo-600"
                />
                <span>مدیر</span>
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  {...register("role", { required: "انتخاب نقش ضروری است" })}
                  value="Partner"
                  className="accent-green-600"
                />
                <span>شریک</span>
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  {...register("role", { required: "انتخاب نقش ضروری است " })}
                  value="Accountant"
                  className="accent-yellow-600"
                />
                <span>حسابدار</span>
              </label>
              {errors.role && (
                <p className="mt-2 text-sm text-red-600" role="alert">
                  {errors.role?.message}
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
