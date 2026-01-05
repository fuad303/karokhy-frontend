import { z } from "zod";

export const purchaseSchema = z
  .object({
    paymentType: z.enum(["نقدی", "قرضه"], {
      message: "نوع پرداخت الزامی است",
    }),
    expenseType: z.enum(["با مصارف", "بی مصارف"], {
      message: "نوع مصرف الزامی است",
    }),
    installmentAmount: z.number().optional(),
    unitPrice: z.number({ message: "قیمت الزامی است" }).positive(),
    quantity: z.number({ message: "مقدار الزامی است" }).positive(),
    description: z.string(),
    measureUnit: z.enum(["KG", "LITER", "PIECE"], {
      message: "واحد اندازه‌گیری الزامی است",
    }),

    currency: z.enum(["TOMAN", "USD"], {
      message: "واحد پول الزامی است",
    }),
  })
  .refine(
    (data) =>
      data.paymentType === "نقدی" ||
      (data.paymentType === "قرضه" &&
        data.installmentAmount &&
        data.installmentAmount > 0),
    {
      message: "مقدار قرضه الزامی است",
      path: ["debtAmount"],
    }
  );
export type PurchaseFormData = z.infer<typeof purchaseSchema>;
