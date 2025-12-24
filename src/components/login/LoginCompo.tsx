import { useForm } from "react-hook-form";
import axios from "axios";
import { loginSchema, type LoginFormType } from "../../schema/login.schema";
import api from "../../config/axios.interceptor";
import { useApp } from "../../context/Context";
import { zodResolver } from "@hookform/resolvers/zod";
import ErrorMessageCompo from "../errors/ErrorMessage";
import Loading from "../Loading";
import MountainBackground from "../MountainBg";

const LoginCompo = () => {
  const { backendErrorPopup, setBackendErrorMessage, setBackendErrorPopup } =
    useApp();

    
  const {
    register,
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
      const res = await api.post("/login", {
        username: data.username,
        password: data.password,
        role: data.role,
      });
      sessionStorage.setItem("token", res.data.token);
      window.location.href = "/";
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        setBackendErrorMessage(error.response?.data?.message ?? "مشکلی رخ داد");
      } else {
        setBackendErrorMessage("مشکلی رخ داد");
      }
      setBackendErrorPopup(true);
    }
  };

  if (isSubmitting) return <Loading />;

  return (
    <div
      className=" flex items-center justify-center relative bg-cover bg-center min-h-screen"
      dir="rtl"
    >
      <MountainBackground />
      {/* Dark overlay - REMOVED backdrop-blur-sm */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Error popup */}
      {backendErrorPopup && (
        <ErrorMessageCompo onClose={() => setBackendErrorPopup(false)} />
      )}

      {/* Login Card - REMOVED backdrop-blur-md, increased opacity */}
      <div className="relative z-10 w-full max-w-md p-10 bg-white/85 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-200">
        <h2 className="text-3xl font-extrabold text-center text-gray-600 mb-8">
          ورود به سیستم
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Username */}
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-800 text-right"
            >
              نام کاربری
            </label>
            <input
              id="username"
              type="text"
              {...register("username", { required: "نام کاربری ضروری است" })}
              required
              autoComplete="username"
              className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-2 text-gray-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 placeholder-gray-400"
            />
            {errors.username && (
              <p className="mt-1 text-sm text-red-600">
                {errors.username?.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-800 text-right"
            >
              رمز عبور
            </label>
            <input
              id="password"
              type="password"
              {...register("password", { required: "رمز ورود ضروری است" })}
              required
              autoComplete="current-password"
              className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-2 text-gray-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 placeholder-gray-400"
            />
            {errors.password && (
              <p className="mt-1 text-sm text-red-600">
                {errors.password?.message}
              </p>
            )}
          </div>

          {/* Role */}
          <div>
            <span className="block text-sm font-medium text-gray-800">نقش</span>
            <div className="flex justify-between mt-2">
              {["ADMIN", "SHAREHOLDER", "ACCOUNTANT"].map((role) => (
                <label key={role} className="flex items-center gap-2">
                  <input
                    type="radio"
                    {...register("role", { required: "انتخاب نقش ضروری است" })}
                    value={role}
                    className="text-blue-600"
                  />
                  <span className="text-gray-900">
                    {role === "ADMIN"
                      ? "مدیر"
                      : role === "SHAREHOLDER"
                      ? "شریک"
                      : "حسابدار"}
                  </span>
                </label>
              ))}
            </div>
            {errors.role && (
              <p className="mt-1 text-sm text-red-600">
                {errors.role?.message}
              </p>
            )}
          </div>

          {/* Submit */}
          <button
            disabled={isSubmitting}
            type="submit"
            className="w-full py-3 mt-4 bg-linear-to-r from-blue-500 to-indigo-500 text-white font-bold rounded-2xl shadow-lg hover:from-blue-600 hover:to-indigo-600 transition-all"
          >
            ورود
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginCompo;
