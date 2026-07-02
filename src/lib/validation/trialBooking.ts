import { z } from "zod";

export const trialBookingSchema = z.object({
  parentName: z
  .string()
  .trim()
  .min(1, "Parent name is required.")
  .regex(
    /^[A-Za-z\s'-]+$/,
    "Parent name contains invalid characters."
  )
  .min(2, "Parent name must be at least 2 characters.")
  .max(50, "Parent name is too long."),

  email: z
    .string()
    .trim()
    .email("Please enter a valid email address."),

  contactNumber: z
    .string()
    .trim()
    .min(7, "Phone number is too short.")
    .max(15, "Phone number is too long.")
    .regex(
  /^\+[1-9]\d{6,14}$/,
  "Please enter a valid phone number."
),

  country: z
    .string()
    .min(1, "Please select your country."),

  timezone: z
    .string()
    .min(1, "Please select your timezone."),

  studentName: z
  .string()
  .trim()
  .min(1, "Student name is required.")
  .regex(
    /^[A-Za-z\s'-]+$/,
    "Student name contains invalid characters."
  )
  .min(2, "Student name must be at least 2 characters.")
  .max(50, "Student name is too long."),

  age: z
  .string()
  .trim()
  .min(1, "Age is required.")
  .refine(
    (value) => {
      const age = Number(value);
      return !isNaN(age) && age >= 6 && age <= 99;
    },
    {
      message: "Age must be between 6 and 99.",
    }
  ),

  experience: z
    .string()
    .min(1, "Please select chess experience."),

  preferredDays: z
    .array(z.string())
    .min(1, "Select at least one preferred day."),

  preferredTime: z
    .string()
    .min(1, "Please select a preferred time."),

  childInterest: z
    .string()
    .max(500)
    .optional(),

  notes: z
    .string()
    .max(500)
    .optional(),
});

export type TrialBookingSchema = z.infer<
  typeof trialBookingSchema
>;