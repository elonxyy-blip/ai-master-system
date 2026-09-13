import { z } from "zod";

export const uploadFileSchema = z.object({
  filename: z.string().min(1),
  mimetype: z.string().min(1),
  size: z.number().max(52428800, "File size exceeds 50MB limit"),
});

export const generatePresentationSchema = z.object({
  name: z.string().min(1, "Presentation name is required"),
  description: z.string().optional(),
  content: z.string().min(1, "Content is required"),
  style: z.enum(["professional", "modern", "minimal"]).default("professional"),
});

export type UploadFileInput = z.infer<typeof uploadFileSchema>;
export type GeneratePresentationInput = z.infer<typeof generatePresentationSchema>;
