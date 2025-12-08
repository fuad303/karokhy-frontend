export const loginSchema = z.object({
  username: z.string(),
  password: z.string(),
  role: z.enum(["مدیر", "شریک", "حسابدار"]),
});
