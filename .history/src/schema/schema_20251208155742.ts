import z from "zod";

export const loginSchema = z.object({
  username: z.string(),
  password: z.string(),
  role: z.enum(["ADMIN", "SHAREHOLDER", "ACCOUNTANT"]),
});

export type LoginFormType = z.infer<typeof loginSchema>;
