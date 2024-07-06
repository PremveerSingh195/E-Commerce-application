import { string, z } from "zod";

export const pdfSchema = z.object({
    pdf: string()
})