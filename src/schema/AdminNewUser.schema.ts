import { z } from "zod";

export const AdminNewUserSchema = z
  .object({
    username: z.string().min(2, "نام کاربری باید حداقل 2 حرف باشد"),
    password: z.string().min(8, "رمز ورود باید حداقل ۸ کاراکتر باشد"),
    phone: z
      .string()
      .regex(
        /^(\+93|0)?7\d{8}$/,
        "شماره تماس معتبر نیست. مثال: +937XXXXXXX یا 07XXXXXXX"
      ),

    role: z
      .string("انتخاب نقش الزامی هست")
      .refine((val) => val === "ACCOUNTANT" || val === "SHAREHOLDER", {
        message: 'Invalid option: expected one of "ACCOUNTANT"|"SHAREHOLDER"',
      }),

    accountantType: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    if (data.role === "SHAREHOLDER" && data.accountantType) {
      ctx.addIssue({
        path: ["accountantType"],
        message: "سهامدار نوع حسابدار ندارد",
        code: z.ZodIssueCode.custom,
      });
    }

    if (data.role === "ACCOUNTANT" && !data.accountantType) {
      ctx.addIssue({
        path: ["accountantType"],
        message: "نوع حسابدار الزامی است",
        code: z.ZodIssueCode.custom,
      });
    }
  });

export type AdminNewUserType = z.infer<typeof AdminNewUserSchema>;
