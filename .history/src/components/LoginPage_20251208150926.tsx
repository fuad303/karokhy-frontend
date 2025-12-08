import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// -------------------------
// 🔹 1. Zod Schema
// -------------------------
const loginSchema = z.object({
  username: z.string().min(1, "username is required"),
  password: z.string().min(1, "password is required"),
  role: z.enum(["ADMIN", "PARTNER", "ACCOUNTANT"], {
    errorMap: () => ({ message: "role is required" }),
  }),
});

// 🔹 2. Extract Type
type LoginFormType = z.infer<typeof loginSchema>;

// -------------------------
// 🔹 3. Login Component
// -------------------------
function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormType>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormType) => {
    console.log("Form Data:", data);
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

        <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-6">
          {/* USERNAME */}
          <div>
            <label className="block text-sm font-medium text-black text-right">
              نام کاربری
            </label>
            <input
              type="text"
              {...register("username")}
              className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2"
            />
            {errors.username && (
              <p className="mt-2 text-sm text-red-600">
                {errors.username.message}
              </p>
            )}
          </div>

          {/* PASSWORD */}
          <div>
            <label className="block text-sm font-medium text-black text-right">
              رمز ورود
            </label>
            <input
              type="password"
              {...register("password")}
              className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2"
            />
            {errors.password && (
              <p className="mt-2 text-sm text-red-600">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* ROLE */}
          <div className="mt-4">
            <span className="text-sm font-medium text-black">نقش:</span>

            <div className="flex gap-4 mt-2">
              <label className="flex items-center gap-2">
                <input type="radio" {...register("role")} value="ADMIN" />
                <span>مدیر</span>
              </label>

              <label className="flex items-center gap-2">
                <input type="radio" {...register("role")} value="PARTNER" />
                <span>شریک</span>
              </label>

              <label className="flex items-center gap-2">
                <input type="radio" {...register("role")} value="ACCOUNTANT" />
                <span>حسابدار</span>
              </label>
            </div>

            {errors.role && (
              <p className="mt-2 text-sm text-red-600">{errors.role.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white rounded-md py-2 font-semibold"
          >
            ورود
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
