import { useForm } from "react-hook-form";
import {
  AdminNewUserSchema,
  type AdminNewUserType,
} from "../../schema/AdminNewUser.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import api from "../../config/axios.interceptor";
import { useNavigate } from "react-router-dom";
import Loading from "../Loading";

function AddUserForm() {
  const navigate = useNavigate();

  const {
    register,
    setValue,
    handleSubmit,
    reset,
    watch,
    resetField,
    formState: { errors, isSubmitting },
  } = useForm<AdminNewUserType>({
    resolver: zodResolver(AdminNewUserSchema),
    defaultValues: {
      role: undefined,
      accountantType: undefined,
    },
  });

  const onSubmit = async (data: AdminNewUserType) => {
    try {
      await api.post("/api/admin/new-user", {
        username: data.username,
        password: data.password,
        phone: data.phone,
        role: data.role,
        accountantType: data.accountantType,
      });
      navigate("/");
      reset();
    } catch (error: unknown) {
      console.log("خطا در اضافه کردن کاربر", error);
    }
  };
  const role = watch("role");

  if (isSubmitting) return <Loading />;
  return (
    <>
      {/* <div className="mt-5  w-full sm:w-100 lg:w-120 mx-auto   "> */}
      <div className="mt-5 w-full sm:max-w-[500px] lg:max-w-[500px] mx-auto">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white p-4 sm:p-6  rounded-xl shadow-md  mx-auto  space-y-4"
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
                  {...register("role")}
                  onChange={() => {
                    setValue("role", "SHAREHOLDER");
                    resetField("accountantType");
                  }}
                />
                شریک
              </label>

              <label className="flex items-center gap-2">
                <input type="radio" value="ACCOUNTANT" {...register("role")} />
                حسابدار
              </label>
            </div>

            {errors.role && (
              <p className="text-red-500 text-sm">{errors.role.message}</p>
            )}

            {role === "ACCOUNTANT" && (
              <div>
                {watch("role") === "ACCOUNTANT" && (
                  <select
                    className="w-full border border-gray-300 outline-primary rounded-md p-2"
                    {...register("accountantType")}
                    defaultValue=""
                  >
                    <option value="">انتخاب نوع حسابدار</option>
                    <option value="REGULAR">حسابدار عادی</option>
                    <option value="SUPER">حسابدار ارشد</option>
                  </select>
                )}

                {errors.role && (
                  <p className="text-red-500 text-sm">{errors.role.message}</p>
                )}
                {errors.accountantType && (
                  <p className="text-red-500 text-sm">
                    {errors.accountantType.message}
                  </p>
                )}
              </div>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={
              isSubmitting
                ? "w-full bg-primary hover:bg-primary text-white py-2 rounded-md opacity-50 cursor-not-allowed"
                : "w-full bg-primary hover:bg-primary text-white py-2 rounded-md"
            }
          >
            اضافه کردن کاربر
          </button>
        </form>
      </div>
    </>
  );
}

export default AddUserForm;
