import { z } from "zod";

export const loginSchema = z.object({
  username: z.string().min(2, "نام کاربری باید حداقل ۲ حرف باشد"),
  password: z.string().min(8, "رمز ورود باید حداقل ۸ کاراکتر باشد"),
  role: z
    .string()
    .refine(
      (val) => val === "ADMIN" || val === "SHAREHOLDER" || val === "ACCOUNTANT",
      {
        message: "انتخاب نقش ضروری است",
      }
    ),
});

export type LoginFormType = z.infer<typeof loginSchema>;
