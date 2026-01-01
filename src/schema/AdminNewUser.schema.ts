import { z } from "zod";

export const AdminNewUserSchema = z.object({
  username: z.string().min(2, "نام کاربری باید حداقل ۲ حرف باشد"),
  password: z.string().min(8, "رمز ورود باید حداقل ۸ کاراکتر باشد"),
  phone: z
    .string()
    .regex(
      /^(\+93|0)?7\d{8}$/,
      "شماره تماس معتبر نیست. مثال: +937XXXXXXX یا 07XXXXXXX"
    ),
  role: z
    .string()
    .refine(
      (val) => val === "SHAREHOLDER" || val === "SUPER" || val === "REGULAR",
      {
        message: "انتخاب نقش ضروری است",
      }
    ),
});

export type AdminNewUserType = z.infer<typeof AdminNewUserSchema>;
