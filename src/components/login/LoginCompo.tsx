import { useForm } from "react-hook-form";
import { loginSchema, type LoginFormType } from "../../schema/login.schema";
import api from "../../config/axios.interceptor";
import type { AxiosError } from "axios";
import { useApp } from "../../context/Context";
import ErrorMessage from "../errors/ErrorMessage";
import { zodResolver } from "@hookform/resolvers/zod";

const LoginCompo = () => {
  const {
    backendErrorPopup,
    setBackendErrorPopup,
    setBackendErrorMessage,
    backendErrorMessage,
  } = useApp();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormType>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      role: "",
    },
  });

  const onSubmit = async (data: LoginFormType) => {
    try {
      const response = await api.post("/login", {
        username: data.username,
        password: data.password,
        role: data.role,
      });

      if (response.status === 200) {
        reset();
        window.location.href = "/";
        console.log("successfull");
      } else {
        setBackendErrorMessage("خطا در ورود");
        setBackendErrorPopup(true);
      }
    } catch (error: unknown) {
      let msg = "مشکلی رخ داد";
      // checking the axios error type
      if (error && (error as AxiosError).isAxiosError) {
        const axiosError = error as AxiosError;

        if (axiosError.response) {
          // when server response 400 or 500
          msg = axiosError.response.data?.message || msg;
        } else if (axiosError.request) {
          // while sending request no comeback any response , network error
          msg = "مشکل در اتصال به سرور";
        } else {
          // any Jsx Error
          msg = axiosError.message || msg;
        }
      }

      setBackendErrorMessage(msg);
      setBackendErrorPopup(true);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center relative bg-blue-300"
      dir="rtl"
    >
      {backendErrorPopup && (
        <ErrorMessage
          onClose={() => setBackendErrorPopup(false)}
          error={backendErrorMessage}
        />
      )}
      <div className="absolute inset-0 bg-blue-100 bg-opacity-70 backdrop-blur-md"></div>

      <div className="relative flex flex-col justify-center px-6 py-6 sm:py-12 my-10 sm:my-0 sm:w-full sm:max-w-sm bg-white border border-gray-300 rounded-lg shadow-md">
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
                  {...register("role")}
                  value="ADMIN"
                  className="text-primary"
                />
                <span>مدیر</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  {...register("role")}
                  value="SHAREHOLDER"
                  className="text-primary"
                />
                <span>شریک</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  {...register("role")}
                  value="ACCOUNTANT"
                  className="text-primary"
                />
                <span>حسابدار</span>
              </label>
            </div>
            {errors.role && (
              <p className="mt-2 text-sm text-red-600" role="alert">
                {errors.role?.message}
              </p>
            )}
          </div>

          <div>
            <button
              disabled={isSubmitting}
              type="submit"
              className="flex w-full justify-center rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              ورود
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginCompo;
