
    export const loginSchema = z.object({
  username: z.string().min(1, "نام کاربری لازم است"),
  password: z.string().min(6, "رمز باید حداقل 6 کاراکتر باشد"),
  role: z.enum(["مدیر", "شریک", "حسابدار"]),
});
}