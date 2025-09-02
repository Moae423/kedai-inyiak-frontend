import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email format"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(6, "Password must be at least 6 characters"),
});
export type LoginFormData = z.infer<typeof loginSchema>;

// Response dari backend
export const authResponseSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  data: z
    .object({
      token: z.string(),
      user: z.object({
        id: z.string().or(z.number()),
        name: z.string(),
        email: z.email(),
      }),
    })
    .optional(),
});

export type AuthResponse = z.infer<typeof authResponseSchema>;
