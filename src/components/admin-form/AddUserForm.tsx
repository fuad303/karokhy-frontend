import { useForm } from "react-hook-form";
import {
  AdminNewUserSchema,
  type AdminNewUserType,
} from "../../schema/AdminNewUser.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import api from "../../config/axios.interceptor";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function AddUserForm() {
  const navigate = useNavigate();
  const [roleType, setRoleType] = useState<"SHAREHOLDER" | "ACCOUNTANT" | "">(
    ""
  );
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AdminNewUserType>({
    resolver: zodResolver(AdminNewUserSchema),
    defaultValues: {
      role: "",
    },
  });

  const onSubmit = async (data: AdminNewUserType) => {
    try {
      await api.post("/api/admin/new-user", {
        username: data.username,
        password: data.password,
        phone: data.phone,
        role: data.role,
      });
      navigate("/");
      reset();
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        alert(error.response?.data?.message ?? "مشکلی رخ داد");
      } else {
        alert("مشکلی رخ داد");
      }
    }
  };

  return (
    <>
      <div className="mt-5">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white p-4 sm:p-6  rounded-xl shadow-md max-w-md mx-auto w-full space-y-4"
        >
          <h2 className="text-xl font-semibold mb-2 text-gray-600 text-center">
            اضافه کردن کاربر جدید
          </h2>
          <div>
            <label className="block mb-1 font-medium">نام کاربری</label>
            <input
              type="text"
              {...register("username")}
              placeholder="نام کاربری را وارد کنید"
              className="w-full border border-gray-300 outline-primary rounded-md p-2"
            />
            {errors.username && (
              <p className="text-red-500 text-sm">{errors.username.message}</p>
            )}
          </div>
          <div>
            <label className="block mb-1 font-medium">رمز </label>
            <input
              type="password"
              {...register("password")}
              placeholder="رمز ورود را وارد کنید"
              className="w-full border border-gray-300   outline-primary rounded-md p-2"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>

          <div>
            <label className="block mb-1 font-medium">شماره تماس</label>
            <input
              type="text"
              {...register("phone")}
              placeholder="07xxxxxxx"
              className="w-full border border-gray-300  outline-primary rounded-md p-2"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone.message}</p>
            )}
          </div>

          <div>
            <label className="block mb-2 font-medium">نقش</label>

            <div className="flex gap-4">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  value="SHAREHOLDER"
                  checked={roleType === "SHAREHOLDER"}
                  onChange={() => {
                    setRoleType("SHAREHOLDER");
                  }}
                />
                شریک
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  value="ACCOUNTANT"
                  checked={roleType === "ACCOUNTANT"}
                  onChange={() => {
                    setRoleType("ACCOUNTANT");
                  }}
                />
                حسابدار
              </label>
            </div>

            {errors.role && (
              <p className="text-red-500 text-sm">{errors.role.message}</p>
            )}

            {roleType === "SHAREHOLDER" && (
              <input type="hidden" value="SHAREHOLDER" {...register("role")} />
            )}
            {roleType === "ACCOUNTANT" && (
              <div>
                <select
                  {...register("role")}
                  className="w-full border border-gray-300 outline-primary rounded-md p-2"
                >
                  <option value="">انتخاب نوع حسابدار</option>
                  <option value="ACCOUNTANT_REGULAR">حسابدار عادی</option>
                  <option value="ACCOUNTANT_SUPER">حسابدار ارشد</option>
                </select>

                {errors.role && (
                  <p className="text-red-500 text-sm">{errors.role.message}</p>
                )}
              </div>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-primary hover:bg-primary text-white py-2 rounded-md"
          >
            اضافه کردن کاربر
          </button>
        </form>
      </div>
    </>
  );
}

export default AddUserForm;
