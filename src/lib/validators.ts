import { z } from "zod";

export const registerSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export const loginSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(1, "Password is required"),
});

export const collegeSchema = z.object({
  name: z.string().min(2),
  location: z.string().min(2),
  state: z.string().min(2),
  country: z.string().default("India"),
  type: z.string().min(2),
  courses: z.array(z.string()),
  fees: z.number().optional(),
  ranking: z.number().optional(),
  website: z.string().url().optional().or(z.literal("")),
  description: z.string().optional(),
  image: z.string().optional(),
});

export const reviewSchema = z.object({
  rating: z.number().min(1).max(5),
  comment: z.string().optional(),
  collegeId: z.string(),
});